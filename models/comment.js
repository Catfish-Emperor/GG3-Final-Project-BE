const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    userName: {
        required: true,
        type: String
    },
    comment: {
        required: true,
        type: String
    },
    timeStamp: {
        type: Date,
        default: Date.now
    },
    videoId: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Comment', commentSchema)