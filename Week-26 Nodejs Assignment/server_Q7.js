const http = require("http");
const PORT = 3070;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end(" I am happy to learn full stack web development from PWSKIL");
  }
});

server.listen(PORT, (err) => {
  if (err) {
    console.log("Error is :", err);
  }

  console.log(`Port is running on ${hostname}:${PORT}`);
});
