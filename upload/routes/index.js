var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var fs = require('fs');
router.all('/', function (req, res) {
    res.sendFile('../public/index.html');
});
router.post('/upload', multipartMiddleware,(req, res) => {
    console.log(req.body);
    console.log(req.files);
    //处理文件...
    var fpath = req.files.myfile.path;
    var fname = fpath.substr(fpath.lastIndexOf('\\') + 1);
    res.json({fname: fname});
});
module.exports = router;