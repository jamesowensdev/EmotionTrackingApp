const express = require('express');
const app = express();
const port = 8080;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
