const express = require("express");
const path = require("path");

// Function to create and configure the Express application
function createApp() {
  const app = express();
  const publicDirectoryPath = path.join(__dirname, "public");

  // Configuration to serve static files from the public directory
  app.use(express.static(publicDirectoryPath));

  return app;
}

// Function to handle requests at the root ("/") and send the index.html file
function handleRootRequest(req, res) {
  const indexPath = path.join(__dirname, "public", "index.html");
  res.sendFile(indexPath);
}

// Function to start the server
function startServer() {
  const app = createApp();

  // Route to handle requests at the root ("/") and call handleRootRequest function
  app.get("/", handleRootRequest);

  return app;
}

// Function to run the server on the specified port
function runServer(app, port) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

// Create the Express application
const app = createApp();

// Start the server and run it on port 3000
const configuredApp = startServer(app);
runServer(configuredApp, 3000);
/*
    Procedural programming paradigm: 

        Each function has a specific responsibility, and the main logic is organized sequentially.
        The Express application is created, configured, and executed in a procedural manner.
*/
