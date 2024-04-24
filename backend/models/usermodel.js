const {model, Schema} = require ('../connection');

const mySchema = new Schema({ 
    firstName : String,
    lastName : String,
    email : String,
    contact : String,
    role:{type:String, default: 'user'},
    password: String,
    createdAt: {
        type: Date,
        default: Date.now()},
        avatar:{type:String, default:"download.png"}
});

module.exports= model('user', mySchema);