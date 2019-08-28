const express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "pops", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"},
    {name: "popso", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"},
    {name: "popso", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"},
    {name: "popso", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"},
    {name: "popso", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"},
    {name: "popso", image: "https://pixabay.com/get/57e8d3444855a914f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"},
    {name: "popsy", image: "https://pixabay.com/get/57e1d14a4e52ae14f6da8c7dda793f7f1636dfe2564c704c732973dd904ecd50_340.jpg"}
];

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new")
});

app.post("/campgrounds", (req, res) => {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};

    campgrounds.push(newCampground);

    res.redirect("/campgrounds");
    // get data from form and add to campgrounds array
    // redirect to campgrounds page
});

app.listen(3000, () => {
    console.log("YelpCamp has started");
});