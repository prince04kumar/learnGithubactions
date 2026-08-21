const express = require("express");

// create a simple express app
const PORT = process.env.PORT || 3000;
const app = express();

// define a route for the root path

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("Press Ctrl+C to stop the server.");
});
