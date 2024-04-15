const { model, Schema } = require('../connection');

const mySchema = new Schema({
    title: '',
    category: String,
    location: String,
    city: String,
    state: String,
    image: String,
    area: Number,
    facilities: Array,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    } 
});

module.exports = model('space', mySchema);