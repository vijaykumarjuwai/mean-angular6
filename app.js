const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const apiRouter = require('./routes/test');
const createError = require('http-errors');
const mongoose = require('mongoose');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({'extended': false}));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use("/api", apiRouter);
app.use('*', express.static(path.join(__dirname, 'dist/mean-angular6')));


app.use(function(req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function(err, req, res, next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.sendStatus(err.status);
});

// Connect ot mongoose.
mongoose.connect('mongodb+srv://vijaykumar:1qazxsw2@cluster0-mhhcs.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true,
})
    .then(() => console.log('Connection to mongodb successful'))
    .catch(() => console.log('Error in connecting to the database'));

var port = process.env.PORT || '3000';
app.listen(port, function() {
    console.log('listening on port 3000');
});

module.exports = app;