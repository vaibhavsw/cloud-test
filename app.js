const express = require('express')
const app = express()

app.get('/loaderio-9ee702e98ed483284f79947eaa5afae2/', function (request, response) {
    response.sendFile('loaderio-9ee702e98ed483284f79947eaa5afae2.txt',{root:__dirname});
});

app.get('/', function (request, response) {
    response.sendFile('index.html',{root:__dirname});
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})