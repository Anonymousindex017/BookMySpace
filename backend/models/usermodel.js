const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    firstName : String,
    lastName : String,
    email : String,
    contact : String,
    role:{type:String, default: 'user'},
    password: String
});

module.exports= model('user', mySchema);