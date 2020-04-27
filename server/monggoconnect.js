var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/zankarok";
var database = null;

module.exports = {
    insert: insertToDB,
    insertList: insertkaroklist,

    findAll: karokListAll,
    findFile: findFile,
    findFileId: findFileId,

    findFileArtist: findFileArtist,
    findFileGenre: findFileGenre,
    findFileSong: findFileSong,
    findFileLanguage: findFileLanguage,
    findFileCountry: findFileCountry
};

activate();

function activate() {
    startconnection();
}

function startconnection() {
    const options = {
        keepAlive: 1,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    };

    MongoClient.connect(url, options)
        .then((db) => {
            console.log('Monggodb : Connected');
            database = db.db("zankarok");
            createTable();
            //karokListAll();
        })
        .catch(err => {
            console.log('DB Connection Error :' + err.message);
            setTimeout(function() {
                console.log('Reconnect DB');
                startconnection();
            }, 3000)
        });
}

// Create Collection Here
function createTable() {
    database.createCollection("karoklist")
        .then((item) => {
            console.log('Monggodb : karoklist collection create');
        })
        .catch(err => {
            console.log('Monggodb : :' + err.message);
        });


    database.createCollection("devices")
        .then((item) => {
            console.log('Monggodb : devices collection create');
        })
        .catch(err => {
            console.log('Monggodb : Error :' + err.message);
        });

    /*
    // drop table
    database.collection("karoklist").drop()
        .then((item) => {
            console.log('Monggodb : karoklist collection droped');
        })
        .catch(err => {
            console.log('Monggodb : Error :' + err.message);
        });
    */
}

// insert to lost of collection
function insertToDB(type, data) {
    console.log("Monggodb insertToDB Type : " + type);
    switch (type) {
        case 'karoklist':
            return insertkaroklist(data);
            break;

        default:
            console.log(type + " Not Exist");
            break;
    }
}


function insertkaroklist(data) {
    data.upload_date = Date.now();
    data.update_date = Date.now();
    return database.collection("karoklist").insertOne(data)
        .then((item) => {
            console.log('Monggodb insertkaroklist : ', item.ops[0]);
            return item.ops[0];
        })
        .catch(err => {
            console.log('Monggodb insertkaroklist Error :' + err.message);
            return {};
        });
}

// find all
function karokListAll() {
    return database.collection("karoklist").find({}, { projection: { _id: 0 } }).sort({ upload_date: -1 }).limit(100).toArray()
        .then((item) => {
            console.log('Monggodb :karokListAll : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : karokListAll Error :' + err.message);
            return [];
        });
}

// find file *random
function findFile(findThis) {
    return database.collection("karoklist").find(findThis, { projection: { _id: 0 } }).toArray()
        .then((item) => {
            console.log('Monggodb :findFile : Success', item);
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findFile Error :' + err.message);
            return [];
        });
}

// find file vith id
function findFileId(id) {
    var findThis = { filename: id };
    return database.collection("karoklist").findOne(findThis, { projection: { _id: 0 } })
        .then((item) => {
            console.log('Monggodb :karokListAll : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : karokListAll Error :' + err.message);
            return {};
        });
}

// Artist
function findFileArtist(artistName) {
    var findThis = { artist: artistName };
    return database.collection("karoklist").find(findThis, { projection: { _id: 0 } }).toArray()
        .then((item) => {
            console.log('Monggodb :findFileArtist : Success', item);
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findFileArtist Error :' + err.message);
            return [];
        });
}

// Genre
function findFileGenre(genreName) {
    var findThis = { genre: genreName };
    return database.collection("karoklist").find(findThis, { projection: { _id: 0 } }).toArray()
        .then((item) => {
            console.log('Monggodb :findFileGenre : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findFileGenre Error :' + err.message);
            return [];
        });
}

// Song
function findFileSong(songName) {
    var findThis = { title: songName };
    return database.collection("karoklist").find(findThis, { projection: { _id: 0 } }).toArray()
        .then((item) => {
            console.log('Monggodb :findFileSong : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findFileSong Error :' + err.message);
            return [];
        });
}

// Language
function findFileLanguage(languageName) {
    var findThis = { language: languageName };
    return database.collection("karoklist").find(findThis, { projection: { _id: 0 } }).toArray()
        .then((item) => {
            console.log('Monggodb :findFileLanguage : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findFileLanguage Error :' + err.message);
            return [];
        });
}

// Country
function findFileCountry(countryName) {
    var findThis = { country: countryName };
    return database.collection("karoklist").find(findThis, { projection: { _id: 0 } }).toArray()
        .then((item) => {
            console.log('Monggodb :findFileCountry : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findFileCountry Error :' + err.message);
            return [];
        });
}