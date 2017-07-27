'use strict';
module.exports = function(app) {
  var hello = require('../controllers/helloController');


  // hello Routes
  app.route('/hello')
    .get(hello.sayHello)
};
