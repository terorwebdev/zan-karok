const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3004;
const router = express.Router();
const fs = require('fs');
const fileUpload = require('express-fileupload');
const path = require("path");
const dirTree = require("directory-tree");
const bodyParser = require('body-parser');
const uploadPath = path.join(__dirname, '/uploads')

var cors = require('cors');

app.use('/', function(req, res, next) {
    console.log('Uploads Request ' + Date.now() + ' ' + req.url);
    next();
});
app.use('/', express.static(__dirname + '/uploads'));
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));
app.use('/upload', router);

router.post('/delete', function(req, res) {
    const body = req.body;
    fs.unlink(body.path, function(err) {
        if (err) {
            res.json({ data: { result: 'error', reason: body.name + ' not exist' } });
        } else {
            console.log('File has been Deleted');
            res.json({ data: { result: 'success', reason: body.name + ' has been Deleted' } });
        }
    });
});

router.get('/list', function(req, res) {
    const tree = dirTree(uploadPath);
    res.json({ data: tree });
});

router.post('/fileUpload', function(req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        console.log('No files were uploaded.');
        return res.status(400).send('No files were uploaded.');
    }

    let inputFile = req.files.file;
    console.log('Uploading : ' + inputFile.name)

    const tree = dirTree(uploadPath);
    const fileList = tree.children;

    const check = fileList.find(
        item => item.name === inputFile.name
    );

    if (check) {
        console.log('Error Upload, Filename duplicate : ' + inputFile.name);
        return res.status(201).json({ data: 'Duplicate : ' + inputFile.name });
    } else {
        inputFile.mv(uploadPath + '/' + inputFile.name, function(err) {
            if (err) {
                console.log('Error Upload : ' + inputFile.name);
                return res.status(500).send(err);
            }

            console.log('Success Upload : ' + inputFile.name)
            res.json({ data: inputFile.name });
        });
    }
});




http.listen(port, () => {
    console.log('Upload Server listening on port ' + port)
});