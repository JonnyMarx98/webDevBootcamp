var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo_2", { useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user");

// POST - title, conent

// USER - email, name


Post.create({
    title: "burger PART 4",
    content: "sdfsdfsd BLAYH BLAH BALHf"
}, function(err, post){
    User.findOne({email: "bobby@bob.com"}, (err, foundUser) => {
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save((err, data) => {
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        }
    });
});

// User.create({
//     email: "bobby@bob.com",
//     name: "bobby smith"
// });

// User.findOne({email: "bobby@bob.com"}).populate("posts").exec((err, user) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });