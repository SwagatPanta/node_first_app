//=========event===============
const EventEmitter = require('events');

    // (function (exports, require, module, __filename, __dirname) {

    // console.log(__filename);
    // console.log(__dirname);
    // console.log(process.env.PATH)


    var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        //Send an HTTP request
        console.log(message);

        //raise an event
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

    module.exports = Logger;
// module.exports.endPoint=url;
// })