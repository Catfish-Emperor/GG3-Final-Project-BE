const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productLink: {
        required: true,
        type: String
    },
    productImg: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: String
    },
    videoId: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Product', productSchema)