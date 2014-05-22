var bunyan = require('bunyan')
    , path = require('path');


/***
 *
 * @param name {string}
 * @returns {bunyan logger}
 */
module.exports.getLogger = function (name) {
    //var logPath=path.resolve(__dirname,'./../../log/all.log');
    //console.log('logPath', logPath)

    var matches=name.match(/\/[^\/]+$/g);
    if (matches) {
        name=matches[0];
    }

    return bunyan.createLogger({
        name  : name,
        stream: process.stdout
        //,
        //level:'error'
        //,
        //  streams:[{
        //  path: logPath
        //}]
    });
}
