var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
    // res.send("You fell in love with " + thing);
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "susy"},
        {title: "Post 2", author: "jonny"},
        {title: "cake", author: "jayde"}
    ];
    res.render("posts",{posts: posts});
})

app.listen(3000, function(){
    console.log("serving on port 3000 bois!");
});