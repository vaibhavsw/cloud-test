const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/loaderio-9ee702e98ed483284f79947eaa5afae2', function (request, response) {
    response.sendFile('./loaderio-9ee702e98ed483284f79947eaa5afae2');
});

app.listen(80, function () {
  console.log('Example app listening on port 80!')
})
