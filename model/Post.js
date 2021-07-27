var mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: String,
    body: String,
    video: String,
    video_source: String,
    image: String,
    date: {type: Date, default: Date.now},
    category: String,
});

module.exports = Post = mongoose.model("Post", postSchema);