
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var routes = require('./routes/');

var app = express();

// This 'if' statement prevents application log messages from
// displaying in the stdout when the tests are run
if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if(app.get('env') === 'development' || app.get('env') === 'test') {
  app.use( (err, req, res, next) => {
    console.log("error!", err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} in this super keen env: ${process.env.NODE_ENV}`);
});

module.exports = app;
//we are exporting app to pull in the instance of express into test without having to run the server
//Joe Shepherd

// view db
// curl http://localhost:3000/api/v1/shows

//view in json format
// curl http://localhost:3000/api/v1/shows | python -m json.tool
//
// post new show
// curl --request POST --data "{ \"name\": \"Rick and Morty\", \"channel\": \"Cartoon Network\", \"genre\": \"animation\", \"inProduction\": true }" http://127.0.0.1:3000/api/v1/shows/new --header "Content-Type: application/json"
