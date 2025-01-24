const express = require('express');
const path = require('path');

const app = express();
const port = 4168;

app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});