const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = process.env.PORT || 3004;
const router = express.Router();
const fs = require('fs');
const TimeFormat = require('hh-mm-ss');
const { getVideoDurationInSeconds } = require('get-video-duration')
const fileUpload = require('express-fileupload');
const path = require("path");
const dirTree = require("directory-tree");
const bodyParser = require('body-parser');
const uploadPath = path.join(__dirname, '/uploads');
const moveFile = require('move-file');
const contentPath = path.join(__dirname, '/contents/');
const monggo = require('./monggoconnect');

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

router.post('/duration', function(req, res) {
    const body = req.body;
    getVideoDurationInSeconds(body.path)
        .then((duration) => {
            console.log('Duration : ' + TimeFormat.fromS(duration, 'hh:mm:ss') + ' Path : ' + body.path);
            res.json({ data: TimeFormat.fromS(duration, 'hh:mm:ss') });
        }).catch(() => {
            console.log('Error Duration: ' + eq.body);
            res.json({ data: "00:00:00" });
        });
});

router.post('/import', function(req, res) {
    const body = req.body;
    console.log(body);

    const source = body.path;
    const new_filename = Date.now() + '-' + body.filename;
    const destination = contentPath + new_filename;

    fs.rename(source, destination, function(err) {
        if (err) {
            return res.json({ data: "Error file not found" });
        }

        const stats = fs.statSync(destination);
        console.log('File moved : ' + destination);

        const save = {
            title: body.title,
            artist: body.artist,
            genre: body.genre,
            album: body.album,
            language: body.language,
            country: body.country,
            duration: body.duration,
            file_extension: body.extension,
            filename: new_filename,
            size: stats.size,
            sound: body.sound,
            upload_by: ""
        };

        monggo.insertList(save)
            .then((item) => {
                console.log('Monggodb insertkaroklist : ', item);
                res.json({ result: "success", data: item });
            })
            .catch(err => {
                console.log('Monggodb insertkaroklist Error :' + err);
                res.json({ result: "error", data: "Error insert at db" });
            });
    })


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