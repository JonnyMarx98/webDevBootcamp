var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blaalalalla"
    },
    {
        name: "Cloud's BRest",
        image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blaalalalla"
    },
    {
        name: "Cloud's CRest",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "blaalalalla"
    }
]

function seedDB(){
    Campground.remove({}, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
            // add some campgrounds
            data.forEach((seed) => {
                Campground.create(seed, (err, campground) => {
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added camp");
                        Comment.create({
                            text:"This place good",
                            author: "Homer"
                        }, (err, comment) => {
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                            }
                            
                        })
                    }
                });
            });
        }
    });
    
}

module.exports = seedDB;
