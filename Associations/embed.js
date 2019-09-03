var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo2", { useNewUrlParser: true });


// POST - title, conent
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});

var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "pans@gmail.com",
//     name: "Black Smith"
// });

// newUser.posts.push({
//     title:"post titlesssss",
//     content:"lololololololo"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Bananas",
//     content: "are delicious"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "Black Smith"}, (err, user) => {
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things I hate",
            content: "cats cats cats"
        });
        user.save((err, user) => {
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});