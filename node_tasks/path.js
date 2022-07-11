const path = require('path');
//console.log("Current directory:", __dirname)
const path1 = path.resolve("nodejs-mentorship/node_tasks", "path.js");
console.log(path1);

// -----------------------------------------------------------------------------

console.log(__filename);

// -----------------------------------------------------------------------------

const url = require('url');
  
const path3 = '/home/alya/nodejs-mentorship/node_tasks';

console.log(url.pathToFileURL(path3));
