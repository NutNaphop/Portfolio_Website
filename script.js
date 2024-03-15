// Require  json-server@0.17.4 using npm install json-server@0.17.4 to install it
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db/data.json'); // Your database file

// Define CORS middleware
const corsMiddleware = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow any origin
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Credentials' , true);
  res.header('Access-Control-Expose-Headers' , '*');
  next();
};

// Apply CORS middleware before router
server.use(corsMiddleware); // Important , implement to server
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
