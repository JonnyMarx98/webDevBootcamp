const express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("landing");
})

app.get("/campgrounds", (req, res) => {
    var campgrounds = [
        {name: "pops", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"},
        {name: "popso", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"},
        {name: "popsy", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"}
    ];

    res.render("campgrounds", {campgrounds: campgrounds});
})

app.listen(3000, () => {
    console.log("YelpCamp has started")
})