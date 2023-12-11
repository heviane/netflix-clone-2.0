const express = require("express");
const path = require("path");

// Function to create and configure the Express application
function createApp() {
  const app = express();
  const publicDirectoryPath = path.join(__dirname, "public");

  // Middleware setup to serve static files from the public directory
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

module.exports = {
  createApp,
  startServer,
  runServer
};

/*
    Separate the functions into individual modules:

        Now, each function has been separated into its own module. 
        You can import and use these functions independently in other parts of your application. 
        For example:

            const { createApp, startServer, runServer } = require("./yourModuleFileName");

            const app = createApp();
            startServer(app);
            runServer(app, 3000);

        This modular approach makes it easier to manage and reuse different parts of the codebase
*/
