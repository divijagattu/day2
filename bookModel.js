const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
    bookid:{
        type: Number,
        unique: true,
        required: true
    },
    bookname: {
        type: String,
        required: true
    },
    authorname: {
        type: String,
        required: true
    },
    edition: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    copy:{
        type: Number,
        required: true
    }
}, {
    timestamps: true  
});

const Store = mongoose.model('Store', storeSchema);
module.exports = Store;