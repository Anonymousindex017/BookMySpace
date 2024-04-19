const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    fullName : String,
    email: String,
    phoneNumber: Number,
    details : String,

});

module.exports= model('PostCollection', mySchema);