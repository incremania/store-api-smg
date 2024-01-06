const { Schema, default: mongoose } = require('mongoose');

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String], // Array of image URLs
        required: true,
      },
})

module.exports = mongoose.model('Product', ProductSchema)