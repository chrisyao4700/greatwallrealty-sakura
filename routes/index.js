var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('I AM AT INDEX');
    res.render('index', {
        title: 'Great Wall Realty - Sakura',
        page: 'index'
    });
});
router.get('/purchase', function (req, res, next) {
    //console.log('i am here !');
    res.render('purchasePage', {
        title: 'Great Wall Realty - Sakura',
        page: 'purchase'

    });
});
router.get('/design', function (req, res, next) {
    res.render('designPage', {
        title: 'Great Wall Realty - Sakura',
        page: 'design'
    });
});
router.get('/management', function (req, res, next) {
    res.render('managementPage', {
        title: 'Great Wall Realty - Sakura',
        page: 'management'
    });
});
router.get('/loan', function (req, res, next) {
    res.render('loanPage', {
        title: 'Great Wall Realty - Sakura',
        page: 'loan'
    });
});
router.get('/land', function (req, res, next) {
    res.render('landPage', {
        title: 'Great Wall Realty - Sakura',
        page: 'land'
    });
});
router.get('/escrow', function (req, res, next) {
    res.render('escrowPage', {
        title: 'Great Wall Realty - Sakura',
        page: 'escrow'
    });
});
router.get('/about', function (req, res, next) {
    res.render('aboutPage', {
        title: 'Great Wall Realty - Sakura',
        page: 'about'
    });
});
router.get('/privacy', function (req, res, next) {
    res.render('privacy', {
        title: 'Great Wall Realty - Sakura'
    });
});


module.exports = router;
