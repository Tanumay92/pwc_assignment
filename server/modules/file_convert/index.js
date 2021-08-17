const express = require('express');
const router = express.Router();
const fileConvertCtrl = require('./file_convert.ctrl');

router.post('/file-to-zip', fileConvertCtrl.fileToZip);

module.exports = router;