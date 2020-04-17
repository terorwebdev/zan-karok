const db = require('./monggoconnect');
const masterServer = require('./masterServer');
const clientServer = require('./clientServer');
const socketServer = require('./socketServer');
const staticServer = require('./contentServer');
const uploadServer = require('./uploadServer');

console.log('Starting zan-karok...');