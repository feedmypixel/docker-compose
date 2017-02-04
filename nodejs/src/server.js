var express = require('express')
var app = express()
var port = process.env.PORT || 4000;

app.disable('x-powered-by');
app.use(express.static('src/views/', {maxAge: 86400000}))
app.use(express.static('src/', {maxAge: 86400000}))
app.listen(port, console.log('Hi! Listening on port: ' + port))
