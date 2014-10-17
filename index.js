var bunyan = require('bunyan')
    , path = require('path');


/***
 *
 * @param name {string}
 * @returns {bunyan logger}
 */
module.exports.getLogger = function (name) {
    var matches;

    matches=name.match(/\/[^\/]+$/g);
    if (matches) {
        name=matches[0];
    }

    return bunyan.createLogger({
        name  : name,
        stream: process.stdout
    });
}
