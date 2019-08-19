const http = require('http');

// creat a server object
http
  .createServer((req, res) => {
    // write response
    res.write('Hello World');
    res.end();
  })
  .listen(5000, () => console.log('Server Running'));