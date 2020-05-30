var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/zankarok";
var database = null;

module.exports = {
    insert: insertToDB,
    insertList: insertkaroklist,

    findAll: karokListAll,
    findFile: findFile,
    findFileId: findFileId,

    ListGenre: listGern,

    findFileArtist: findFileArtist,
    findFileGenre: findFileGenre,
    findFileSong: findFileSong,
    findFileLanguage: findFileLanguage,
    findFileCountry: findFileCountry,

    // player
    findPlayerName: findPlayerName,
    addPlayer: addPlayer,

    // master
    addMasterUser: addMasterUser,
    findMasterName: findMasterName,
    findMasterEmail: findMasterEmail
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


    database.createCollection("player_list")
        .then((item) => {
            console.log('Monggodb : player_list collection create');
        })
        .catch(err => {
            console.log('Monggodb : Error :' + err.message);
        });

    database.createCollection("master_users")
        .then((item) => {
            console.log('Monggodb : master_users collection create');
        })
        .catch(err => {
            console.log('Monggodb : Error :' + err.message);
        });

    // drop table

    /*
    database.collection("master_users").drop()
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
function listGern() {
    return database.collection("karoklist").find({}, {
            projection: {
                _id: 0,
                title: 0,
                artist: 0,
                language: 0,
                size: 0,
                country: 0,
                album: 0,
                duration: 0,
                file_extension: 0,
                filename: 0,
                sound: 0,
                upload_by: 0,
                upload_date: 0,
                update_date: 0
            }
        }).toArray()
        .then((item) => {
            console.log('Monggodb :karokListAll : Success');
            var genre = [];

            for (const x of item) {
                genre.push(x.genre)
            }

            return Array.from(new Set(genre));
        })
        .catch(err => {
            console.log('Monggodb : karokListAll Error :' + err.message);
            return [];
        });
}

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

// Player
function findPlayerName(name) {
    var findThis = { player_name: name };
    return database.collection("player_list").findOne(findThis, { projection: { _id: 0 } })
        .then((item) => {
            console.log('Monggodb :findPlayerName - player_list : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findPlayerName - player_list Error :' + err.message);
            return {};
        });
}

function addPlayer(data) {
    data.insert_date = Date.now();
    data.update_date = Date.now();
    return database.collection("player_list").insertOne(data)
        .then((item) => {
            console.log('Monggodb: findPlayerName - player_list : ', item.ops[0]);
            return item.ops[0];
        })
        .catch(err => {
            console.log('Monggodb: findPlayerName - player_list Error :' + err.message);
            return {};
        });
}

// master
function addMasterUser(data) {
    data.insert_date = Date.now();
    data.update_date = Date.now();
    return database.collection("master_users").insertOne(data)
        .then((item) => {
            console.log('Monggodb: addMasterUser - master_users : ', item.ops[0]);
            return item.ops[0];
        })
        .catch(err => {
            console.log('Monggodb: addMasterUser - master_users Error :' + err.message);
            return {};
        });
}

function findMasterName(name) {
    var findThis = { username: name };
    return database.collection("master_users").findOne(findThis, { projection: { _id: 0 } })
        .then((item) => {
            console.log('Monggodb :findMasterName - master_users : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findMasterName - master_users Error :' + err.message);
            return {};
        });
}

function findMasterEmail(name) {
    var findThis = { email: name };
    return database.collection("master_users").findOne(findThis, { projection: { _id: 0 } })
        .then((item) => {
            console.log('Monggodb :findMasterEmail - master_users : Success');
            return item;
        })
        .catch(err => {
            console.log('Monggodb : findMasterEmail - master_users Error :' + err.message);
            return {};
        });
}