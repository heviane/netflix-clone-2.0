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

// Function to start the server
function startServer() {
  const app = createApp();

  // Route to handle requests at the root ("/") and send the index.html file
  app.get("/", (req, res) => {
    const indexPath = path.join(__dirname, "public", "index.html");
    res.sendFile(indexPath);
  });

  return app;
}

// Export the configured application instance and start the server
module.exports = startServer();
// Exportar somente o startServer(), assim o createApp() fica como private.

/*
  Explanation:

    createApp: This function creates an instance of the Express application 
    and configures middleware to serve static files from the "public" directory.

    startServer: This function calls createApp to get the application instance 
    and then defines a route for the root ("/") that sends the "index.html" file 
    when the route is accessed.

    module.exports: Exports the configured instance of the Express application.

  The code is typically used to start a web server that serves static files 
  from the "public" directory when the application is executed.
*/
