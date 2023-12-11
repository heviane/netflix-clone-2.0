const express = require("express");
const path = require("path");

// Function to create and configure the Express application
const createApp = () => {
  const app = express();
  const publicDirectoryPath = path.join(__dirname, "public");

  // Configuration to serve static files from the public directory
  app.use(express.static(publicDirectoryPath));

  return app;
};

// Function to start the server
const startServer = (app) => {
  // Route to handle requests at the root ("/") and send the index.html file
  app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "public", "index.html");
    res.sendFile(indexPath);
  });

  return app;
};

// Function to run the server on the specified port
const runServer = (app, port) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

// Create the Express application
const app = createApp();

// Start the server and run it on port 3000
const configuredApp = startServer(app);
runServer(configuredApp, 3000);

/*
    Functional programming paradigm:

        In this code, the functions createApp, startServer, 
        and runServer are pure functions that take arguments and return results, 
        avoiding mutable states. 

        The Express application is created, configured, 
        and executed in a more functional manner.
*/
