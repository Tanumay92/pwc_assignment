const admZip = require('adm-zip');
const fs = require('fs');

const convertFileTozip = async function(reqarg, callback) {
    try {
        let req = reqarg || {};
        const file = new admZip();
        let content = req.files.myFile.data; 
        await file.addFile(req.files.myFile.name, new Buffer.alloc(content.length, content), "entry comment goes here")
        await file.writeZip('zip/'+ req.files.myFile.name + '.zip')

        return callback(null, {message : 'Zip created!'});
    } catch(e) {
        console.log(e);
        callback({
            message : e.message,
        }, null);
    }
}

module.exports = {
    convertFileTozip
}