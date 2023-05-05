const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const Sequelize = require("sequelize");
const sequelize = new Sequelize("der_v3", "dvr", "dvr2022", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const usersRouter = require('./users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/dvr', usersRouter);


app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const http = require('http');
app.set('port','3000');

const server = http.createServer(app);

app.listen(app.get('port'), () => {
  console.log(`Express server listening on port ${app.get('port')}`);
})

