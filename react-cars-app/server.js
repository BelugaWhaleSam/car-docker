const express = require('express')

const path = require('path');
const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); // this is the route that will be used to serve the build folder

app.listen(PORT);

console.log('Server is listening on port ' + PORT);
