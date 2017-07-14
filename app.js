const express = require('express')
const app = express()

app.get('/loaderio-fb4ee61b984f952c3844dd9967dbbb95/', function (request, response) {
    response.sendFile('loaderio-fb4ee61b984f952c3844dd9967dbbb95.txt',{root:__dirname});
});

app.get('/', function (request, response) {
    response.sendFile('index.html',{root:__dirname});
})


app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
