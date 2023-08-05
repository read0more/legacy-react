const http = require('http');
// cors all allow without express
// const cors = require('cors');


http.createServer((req, res) => {
  // / returns { "message": "Hello World!" }
  if (req.url === '/') {
    // delay 1s
    setTimeout(() => {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      // allow all cors
      res.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
      res.end(JSON.stringify({ message: 'Hello World!' }));
      
    }, 1000);
  }
}).listen(3001, () => console.log('Server running on port 3001'));