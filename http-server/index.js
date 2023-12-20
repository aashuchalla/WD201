const http = require('http');
const fs = require('fs');
const url = require('url');
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));
const port = args.port || 3000;
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === '/registration') {
    const registrationPage = fs.readFileSync('./http-server/registration.html', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(registrationPage);
  } else if (parsedUrl.pathname === '/projects') {
    const projectPage = fs.readFileSync('./http-server/project.html', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(projectPage);
  } else {
    const homePage = fs.readFileSync('./http-server/home.html', 'utf8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(homePage);
  }
});
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
