const fileConvertModel = require('./file_convert.model');
const async = require('async');


const fileToZip = function(req, res) {
    let response = {'method' : 'fileToZip'};
    try {
        const convertFile = function( callback) {
            fileConvertModel.convertFileTozip(req, callback);
        }

        async.waterfall([
            convertFile
        ], function(err, result) {
            if(err !== null) {
                response.err = err;
            } else {
                response.result = result;
            }

            res.send(response);
        })
    } catch(e) {
        console.log(e);
        response.error = e.message;
        res.send(response);
    }
}

module.exports = {
    fileToZip
}