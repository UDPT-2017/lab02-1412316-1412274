var express = require('express');
var app = express();
var exphbs = require('express-handlebars');
var path = require('path'); // cấu hình MVC của hbs

  app.use(express.static('public'));
  app.use('/components', express.static('bower_components'));

  app.set('view engine', 'hbs');
  app.set('views', path.resolve('app/views')); // cấu hình MVC của hbs

  app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'application',
    layoutsDir: path.resolve('app/views/layouts/'),
  }));

  // controller
  var controllers = require('./app/controllers');
  // routes
  app.get('/', controllers.home.index);
  app.get('/about', controllers.about.index);
  app.get('/users', controllers.user.index);
  app.get('/messages', controllers.message.index);

// start server
var port = 3000;
app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
