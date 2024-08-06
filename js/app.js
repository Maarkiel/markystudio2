const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Middleware CORS
app.use(cors());

// Statyczne pliki (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
