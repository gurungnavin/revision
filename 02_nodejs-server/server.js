import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, I am Backend');
})


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
})