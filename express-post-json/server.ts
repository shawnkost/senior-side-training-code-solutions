import express from 'express';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const grades: Record<number, Grade> = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95,
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100,
  },
  273: {
    id: 273,
    name: 'Håkon Wium Lie',
    course: 'CSS',
    score: 92,
  },
};

let nextId = 1;

const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const arr = [];

  for (const key in grades) {
    arr.push(grades[key]);
  }

  res.json(arr);
});

app.post('/api/grades', (req, res) => {
  const grade = req.body as Grade;
  grade.id = nextId;
  grades[nextId] = grade;
  nextId++;
  res.status(201).json(grade);
});

app.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
