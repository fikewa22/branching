const { createServer } = require('http');
const { parse } = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const { pathname } = parse(req.url, true);

  if (pathname === '/homepage') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>Welcome to My Page</title>
      </head>
      <body>
          <h1>Welcome to My Page</h1>
          <p>This is the homepage.</p>
      </body>
      </html>
    `);
  } else if (pathname === '/aboutus') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>About Us</title>
      </head>
      <body>
          <h1>About Us</h1>
          <p>Information about me:</p>
          <br>
          <p>My name is Olatunji Abdul-Qudus Fikewa.</p>
      </body>
      </html>
    `);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
