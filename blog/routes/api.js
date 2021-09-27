var express = require('express');
var router = express.Router();

var apiReg = require('../api/register');
var apiLogin = require('../api/login');
const blogRemove = require('../api/blogRemove');
const blogList = require('../api/blogList');
const blogEdit = require('../api/blogEdit');
const blogCreat = require('../api/blogCreat');
const blog = require('../api/blog');

// post
router.post('/register', apiReg);
router.post('/login', apiLogin);
router.post('/blogRemove', blogRemove);
router.get('/blogList', blogList);
router.post('/blogEdit', blogEdit);
router.post('/blogCreat', blogCreat);
router.get('/blog', blog);

module.exports = router;
