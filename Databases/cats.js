var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// Add new cat to DB

// var george = new Cat({
//     name: "Piggy",
//     age: 20,
//     temperament: "Fat"
// })

// george.save((err, cat)=>{
//     if(err){
//         console.log("Woops", err);
//     } else {
//         console.log("saved cat to DB ", cat);
//     }
// });

Cat.create({
    name: "plop",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log("new cat");
        console.log(cat);
    }
})

// Retrieve all cats from DB

Cat.find({}, (err, cats) => {
    if(err){
        console.log("OH NO, ERROR!");
        console.log(err);
    } else {
        console.log("THE CATS!");
        console.log(cats);
    }
});