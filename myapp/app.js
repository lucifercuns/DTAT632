var express = require('express');
//var router = require('express').Router();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var swaggerUi= require('swagger-ui-express');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');


var app = express();
var options = {
    explorer : false
};
// app.use('/', swaggerUi.serve);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,options));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
