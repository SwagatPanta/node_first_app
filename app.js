
// console.log(module)

//loading a module

// //==========path=====parses============
const log = require('./newModuleLogger.js');
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//==========operatingn system=========
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory ' + totalMemory);

//=========file system=================
const fs = require('fs');
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('$', function (err, files) {
 if (err) console.log('error', err);
 else console.log('result', files);
});


//event=====
const EventEmitter = require('events');

//Register a listener
emitter.on('messageLogged', (arg) => {
 console.log('Listener called', arg);
});

const logger = new Logger();
log('message');