var express = require("express");
var app     = express();
var path    = require("path");

app.use("/css", express.static(__dirname + '/css'));
//make css file public localhost
app.use("/js", express.static(__dirname + '/js'));
//images
app.use("/images", express.static(__dirname + '/images'));
//make js file public to localhost
app.use('/static', express.static(__dirname + '/public'));
//make css and js as localy public


//start server
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/index.html',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/index', function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/notifications', function(req,res){
  res.sendFile(path.join(__dirname+'/notifications.html'));
});
app.get('/notifications.html', function(req,res){
  res.sendFile(path.join(__dirname+'/notifications.html'));
});


app.listen(3000);

console.log("Running at Port 3000");
