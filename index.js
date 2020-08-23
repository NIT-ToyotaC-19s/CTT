const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
