const express = require("express");
const path = require("path");

class WebServer {
  constructor() {
    this.app = this.createApp();
  }

  createApp() {
    const app = express();
    const publicDirectoryPath = path.join(__dirname, "public");

    app.use(express.static(publicDirectoryPath));

    return app;
  }

  startServer() {
    // Define a route to handle requests at the root ("/") and send the index.html file
    this.app.get("/", (req, res) => {
      const indexPath = path.join(__dirname, "public", "index.html");
      res.sendFile(indexPath);
    });
  }

  run() {
    this.startServer();
    this.app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  }
}

// Create an instance of the WebServer class and run the server
const webServer = new WebServer();
webServer.run();

/*
    Oobject-oriented programming paradigm:

        In this code, we've created a class called WebServer that encapsulates the web server logic. 
        The createApp method is used to configure the Express application, 
        the startServer method defines the route, and the run method starts the server on port 3000.

        An instance of the WebServer class is created, and the server is started by calling the run method. 
        This follows a more object-oriented style 
        by encapsulating server-related logic within the WebServer class.
*/
