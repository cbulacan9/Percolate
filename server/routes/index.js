/**
 * User Routes
 */

'use strict';

var indexController = require('../controllers/index');
var mandrillMail = require('../controllers/email');
var path = require('path');
var fs = require('fs');

var routes = function(app) {

  // Dynamically load all routes
  fs.readdirSync(__dirname).forEach(function(file) {
    // Dont load this index.js file
    if (!/index/.test(file)) {
      var route = path.join(__dirname, file);
      require(route)(app);
    }
  });

  // Home
  app.get('/', indexController.index);

  app.get('/email', function(req, res) {
    res.send('Looks like your e-mail failed? -- Try a POST');
  });

  app.post('/email', function(req, res) {
    mandrillMail.mail(req.body);
    console.log('Sent an email!');
    res.redirect('/');
  })
  
};

module.exports = routes;
