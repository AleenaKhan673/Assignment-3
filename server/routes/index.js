var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET About page. */
router.get('/aboutus', function(req, res, next) {
  res.render('about', { title: 'About us' });
});
/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'List of Products' });
});

/* GET Shopping Cart page. */
router.get('/cartlist', function(req, res, next) {
  res.render('index', { title:'Shopping Cart' });
});

/* GET contactus page. */
router.get('/contactus', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
