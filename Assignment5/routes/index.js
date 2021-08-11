var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home', home: true, project: false, about: false, contact: false });
});

router.get('/project', function(req, res, next) {
    res.render('project', { title: 'Project', home: false, project: true, about: false, contact: false });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Us', home: false, project: false, about: true, contact: false });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us', home: false, project: false, about: false, contact: true });
});

module.exports = router;
