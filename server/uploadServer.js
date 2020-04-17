const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3004;
const formidable = require('formidable');

app.use('/', function(req, res, next) {
    console.log('Uploads Request ' + Date.now() + ' ' + req.url);
    next();
});

app.use('/', express.static(__dirname + '/uploads'));

// Create upload API
// Create List of File

http.listen(port, () => {
    console.log('Upload Server listening on port ' + port)
});