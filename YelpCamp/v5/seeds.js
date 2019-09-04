var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices lectus vel tortor fermentum vestibulum. Suspendisse eget turpis nisl. Fusce rhoncus nisi elit, nec venenatis est posuere in. Phasellus faucibus mi nec mauris lobortis, at vestibulum magna accumsan. Pellentesque dictum gravida ex, vestibulum gravida purus faucibus ut. Donec lacinia rhoncus nulla, lobortis condimentum erat semper vel. Curabitur convallis a felis quis egestas. Sed dictum mattis massa sed scelerisque. Cras dapibus eget augue at vehicula. Maecenas magna dui, sodales mollis lacus a, gravida ultricies leo. Maecenas vitae justo dignissim, tristique quam sit amet, egestas odio. Ut pulvinar facilisis hendrerit. Vestibulum ultrices, erat sit amet ornare varius, sem augue efficitur nisl, a porttitor velit erat accumsan mauris. Donec tempus lacus quam, non congue sapien pulvinar elementum. Nunc in pulvinar mi."
    },
    {
        name: "Cloud's BRest",
        image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices lectus vel tortor fermentum vestibulum. Suspendisse eget turpis nisl. Fusce rhoncus nisi elit, nec venenatis est posuere in. Phasellus faucibus mi nec mauris lobortis, at vestibulum magna accumsan. Pellentesque dictum gravida ex, vestibulum gravida purus faucibus ut. Donec lacinia rhoncus nulla, lobortis condimentum erat semper vel. Curabitur convallis a felis quis egestas. Sed dictum mattis massa sed scelerisque. Cras dapibus eget augue at vehicula. Maecenas magna dui, sodales mollis lacus a, gravida ultricies leo. Maecenas vitae justo dignissim, tristique quam sit amet, egestas odio. Ut pulvinar facilisis hendrerit. Vestibulum ultrices, erat sit amet ornare varius, sem augue efficitur nisl, a porttitor velit erat accumsan mauris. Donec tempus lacus quam, non congue sapien pulvinar elementum. Nunc in pulvinar mi."
    },
    {
        name: "Cloud's CRest",
        image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices lectus vel tortor fermentum vestibulum. Suspendisse eget turpis nisl. Fusce rhoncus nisi elit, nec venenatis est posuere in. Phasellus faucibus mi nec mauris lobortis, at vestibulum magna accumsan. Pellentesque dictum gravida ex, vestibulum gravida purus faucibus ut. Donec lacinia rhoncus nulla, lobortis condimentum erat semper vel. Curabitur convallis a felis quis egestas. Sed dictum mattis massa sed scelerisque. Cras dapibus eget augue at vehicula. Maecenas magna dui, sodales mollis lacus a, gravida ultricies leo. Maecenas vitae justo dignissim, tristique quam sit amet, egestas odio. Ut pulvinar facilisis hendrerit. Vestibulum ultrices, erat sit amet ornare varius, sem augue efficitur nisl, a porttitor velit erat accumsan mauris. Donec tempus lacus quam, non congue sapien pulvinar elementum. Nunc in pulvinar mi."
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
                                console.log("created new comment");
                            }
                            
                        })
                    }
                });
            });
        }
    });
    
}

module.exports = seedDB;
