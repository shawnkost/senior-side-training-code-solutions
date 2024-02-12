import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('req.method', req.method);
  res.send('<h1>Hello World</h1>');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
