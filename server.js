const connect = require("connect");
const serveStatic = require("serve-static");

const port = process.env.PORT || 8080;

connect()
  .use(serveStatic(__dirname + "/public"))
  .listen(port, function () {
    console.log(`Server running on port ${port}...`);
  });
