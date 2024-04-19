const { model, Schema } = require('../connection');

const mySchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    space: { type: Schema.Types.ObjectId, ref: 'space' },
    bookingDate: Date,
    duration: Number,
    totalAmount: Number,
    intentId: { type: String, unique: true },
    paymentDetails: Object,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('booking', mySchema);