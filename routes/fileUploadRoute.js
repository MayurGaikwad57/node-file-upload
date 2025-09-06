const express = require('express');
const multer = require('multer');
const upload = require('../configuration/storageConfig')
const {fileUpload} = require('../controller/files')

const router = express.Router();

router.post('/upload',upload.array('file'),fileUpload)

module.exports = router;