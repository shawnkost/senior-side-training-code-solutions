import express from 'express';
import pg from 'pg';
import { ClientError } from './client-error.js';
import { errorMiddleware } from './error-middleware.js';

type Grade = {
  gradeId?: number;
  name: string;
  course: string;
  score: number;
};

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = getGrade(req.body);

    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
    `;

    const params = [name, course, score];
    const result = await db.query<Grade>(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { name, course, score } = getGrade(req.body);
    const gradeId = getGradeId(req.params.gradeId);

    const sql = `
      update "grades"
         set "name" = $1,
             "course" = $2,
             "score" = $3
       where "gradeId" = $4
       returning *
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query<Grade>(sql, params);

    if (result.rowCount === 0) {
      throw new ClientError(404, `cannot find grade with gradeId ${gradeId}`);
    }

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const gradeId = getGradeId(req.params.gradeId);

    const sql = `
      delete from "grades"
       where "gradeId" = $1
      returning *
    `;

    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);

    if (result.rowCount === 0) {
      throw new ClientError(404, `cannot find grade with gradeId ${gradeId}`);
    }

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

function getGradeId(gradeId: string): number {
  const id = Number(gradeId);
  if (Number.isNaN(id) || !Number.isInteger(id) || id < 1) {
    throw new ClientError(400, `gradeId  ${id} must be a positive integer`);
  }
  return id;
}

function getGrade(body: unknown): Grade {
  const grade = body as Grade;
  const { name, course, score } = grade;
  if (!name) {
    throw new ClientError(400, 'No name provided');
  }
  if (!course) {
    throw new ClientError(400, 'No course provided');
  }
  if (typeof score !== 'number') {
    throw new ClientError(400, `score is not a number: ${score}`);
  }
  if (score < 0 || score > 100) {
    throw new ClientError(400, `score ${score} not between 0 and 100`);
  }
  return grade;
}

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
