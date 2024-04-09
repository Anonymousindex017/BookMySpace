const { model, Schema } = require('../connection');

const mySchema = new Schema({
    start:String,
    end:String,
    spaceFor: Selection,
    person: Selection,
    services : Selection,
});

module.exports = model('bookingcard', mySchema);