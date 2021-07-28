require('dotenv').config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const Post = require("./model/Post");

const app = express();

mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(res => console.log(`Connection Succesful ${res}`))
    .catch(err => console.log(`Error in DB connection ${err}`));

//body-parser config;
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('assets'))

app.get("/", async (req, res) => {
    try {
        const posts = await Post.find();
        res.render("index", {
            posts: posts
        });
    } catch (error) {
        console.log(`Could not fetch data ${error}`)
    }
});

app.get("/show/:id", async (req, res) => {
    try {
        var id = req.params.id;
        const post = await Post.findById({
            _id: id
        });
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        res.render("show-project", {
            post: post,
            monthNames: monthNames,
        });
    } catch (error) {
        console.log(`Could not fetch data ${error}`)
    }
});

app.get("/contact", async (req, res) => {
    res.render("contact");
});

app.listen(process.env.PORT || 3000)