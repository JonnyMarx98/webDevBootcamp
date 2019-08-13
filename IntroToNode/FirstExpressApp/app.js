var express = require("express");
var app = express();

// "/" => "hi there"
app.get("/", function(req, res){
    res.send("hi there");
});
app.get("/bye", function(req, res){
    res.send("HI JAYDE");
});
app.get("/dog", function(req, res){
    console.log("DOG REQUEST OH SHIIT");
    res.send("MEEEEOEOOOW");
});
// "/bye" => "bye!"
// "/dog" => "meow"

// Tell express to listen for requests (start server)

app.listen(3000, function(){
    console.log("serving on port 3000");
})