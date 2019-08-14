var express = require("express");
var app = express();

// "/" => "hi there"
// "/bye" => "bye!"
// "/dog" => "meow"
app.get("/", function(req, res){
    res.send("hi there");
});
app.get("/bye", function(req, res){
    res.send("HI JAYDE");
});
app.get("/dog", function(req, res){
    console.log("DOG REQUEST OH SHIIT");
    res.send("MEEEEOEOOOWw");
});
app.get("/r/:subName", function(req, res){
    var subreddit = req.params.subName;
    console.log(req.params);
    res.send("bloop you on da " + subreddit.toUpperCase() + " page!" );
});
app.get("/r/:subName/comments/:id/:title/", function(req, res){
    console.log("DOG REQUEST OH SHIIT");
    res.send("whoa comments pagey bloop");
});
app.get("*", function(req, res){
    console.log("DOG REQUEST OH SHIIT");
    res.send("Woops this page doesn't exist!");
});


// Tell express to listen for requests (start server)

app.listen(3000, function(){
    console.log("serving on port 3000");
})