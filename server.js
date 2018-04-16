var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic('webapp', {'index': ['index.html']}))
app.listen(process.env.port || process.env.PORT ||8080)