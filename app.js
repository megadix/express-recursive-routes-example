var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
REMOVED: Manual routing provided by express-generator wizard

var index = require('./routes/index');
var users = require('./routes/users');

app.use('/', index);
app.use('/users', users);
*/

const routeUtils = require('express-recursive-routes');

const scenario = process.env.SCENARIO || 'default';

switch (scenario) {
    case 'default':
        routeUtils.mountRoutes(app);
        break;
    case 'custom-dir':
        routeUtils.mountRoutes(app, './routes-custom-dir');
        break;
    case 'custom-substring-1':
        routeUtils.mountRoutes(app, './routes-custom-substring-1', '', '.route.js');
        break;
    case 'custom-substring-2':
        routeUtils.mountRoutes(app, './routes-custom-substring-2', '', 'route.');
        break;

}

// same as:
// routeUtils.mountRoutes(app, './routes', '');

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

require('./common').init(require('express-api-routes-list')(app));

module.exports = app;
