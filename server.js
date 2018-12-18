const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'SJNzoa$135',
  database: 'Blog'
});

app.get('/Blog', (req, res) => {
  connection.connect();
  connection.query('select * from BlogsList', function(err, rows, fields) {
    if(!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("error while performing query");
    }
  });
  connection.end();
}); 

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})
app.listen(port);

console.log("server started");