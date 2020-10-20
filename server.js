const express = require('express');
const PORT = process.env.port || 8080;


const app = express();

app.get('/', (req, res) => {
  res.send('flowers smell nice');
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});