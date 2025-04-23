const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
//   res.send('Hello World!');
    res.json({message : 'Hello World!'});
});
app.post("/api/greet", (req, res) => {
//   const {name} = req.body;
const name = req.body.name;
  res.status(200).json({message : `Hello, ${name}!`});
});

app.listen(process.env.PORT || port , () => {
  console.log('Server is running on port');
});