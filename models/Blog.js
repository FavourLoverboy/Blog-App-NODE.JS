const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter a title'],
        lowercase: true
    },
    content: {
        type: String,
        required: [true, 'Please enter content']
    },
    email: {
        type: String,
        required: [true, 'no email found'],
        lowercase: true
    }
});

const Blog = mongoose.model('blog', blogSchema);

module.exports = Blog;