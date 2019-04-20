const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    mini_text: { 
        type: String,
        required: true
    },
    text: { 
        type: String,
        required: true
    },
    image: { 
        type: String,
        required: true
    },
    date: { 
        type: Date,
    }
})

module.exports = mongoose.model('posts', postSchema)