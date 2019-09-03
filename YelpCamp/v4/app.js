var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    seedDB      = require("./seeds");


mongoose.connect("mongodb://localhost:27017/yelp_camp_v4", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB();

app.get("/", (req, res) => {
    res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", (req, res) => {
    // Get all campgrounds from DB
    Campground.find({}, (err, allcampgrounds) => {
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", {campgrounds: allcampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});

// NEW - show form to add new camp
app.get("/campgrounds/new", (req, res) => {
    res.render("campgrounds/new")
});

// CREATE - add new camp to DB
app.post("/campgrounds", (req, res) => {
    // get data from form
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};

    // Create new campground and save to DB
    Campground.create(newCampground, (err, newlyCreated) => {
        if(err){
            console.log(err);
        } else {
            // redirect to campgrounds page
            res.redirect("/campgrounds");
        }
    })
});

// SHOW - show more about one campground
app.get("/campgrounds/:id", (req, res) => {
    // Find campground with ID
    Campground.findById(req.params.id).populate("comments").exec((err, foundCamp) => {
        if(err){
            console.log(err);
        } else {
            console.log(foundCamp);
            // render show template with that ID
            res.render("campgrounds/show", {campground: foundCamp});
        }
    });
});

// =======================
// COMMENTS ROUTES
// =======================

// 
app.get("/campgrounds/:id/comments/new", (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            console.log(err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

app.post("/campgrounds/:id/comments", (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, (err, comment) => {
                if(err){
                    console.log(err);
                } else {
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                    console.log("Added new comment :)");
                }
            })
        }
    })
});

app.listen(3000, () => {
    console.log("YelpCamp has started");
});