let bunyan = require('bunyan');


/**
 * [getLogger description]
 * @param  {[type]} name [description]
 * @param  {[type]} opts [description]
 * @return {[type]}      [description]
 */
module.exports.getLogger = function(name, opts) {
    let matches;
    let options;

    let logLevel;

    opts = opts || {};

    logLevel = process.env.LOG_LEVEL || 'info';


    matches = name.match(/\/[^\/]+$/g);
    if (matches) {
        name = matches[0];
    }

    options = {};
    options.name = name;
    options.stream = process.stdout;
    options.level = logLevel;


    return bunyan.createLogger(options);
};
