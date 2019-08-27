const express = require("express");
var app = express();
var request = require("request");


app.get("/results", (req, res) => {
    request("http://omdbapi.com/?s=california&apikey=thewdb", (error, response, body) => {
        if(!error && response.statusCode == 200){
            var results = JSON.parse(body);
            res.send(results.Search[0].Title);
        }
    });
});

app.listen(3000, function(){
    console.log("serving port 3000");
})