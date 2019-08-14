var express = require('express');
var app = express();

app.get("/", function(req, res){
    res.send("welcome my assignment");
})
app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "woof",
        jayde: "cake"
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    
    res.send("The " + animal + " says '" + sound + "' ");
});

app.get("/repeat/:word/:num", function(req, res){
    var word = req.params.word;
    var num = parseInt(req.params.num, 10);
    var output = "";
    for(var i = 0; i < num; i++){
        output += word;
        output += " "; 
    }
    res.send(output);
})

app.get("*", function(req, res){
    res.send("Sorry, page not found.. wtf u doing wid yo lyfe nibba");
});

app.listen(3000, function(){
    console.log("serving on port 3000");
})
