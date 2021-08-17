const express = require('express');
const router = express.Router();
const files = require('./file_convert');

router.use('/files', files);

module.exports = router;