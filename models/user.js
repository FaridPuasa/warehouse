const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const reqString = {
    type: String,
    require: true,
}

const userSchema  = new mongoose.Schema({
    name: reqString,
    password: reqString,
    position: reqString,
    icNumber: {type:String, required:true, unique:true},
    email: reqString,
    contact: reqString,
    firstTime: reqString,
    date: {type:Date, default: Date.now()}
})

userSchema.statics.authenticate = function(icNumber, password, callback){
    user.findOne({
        icNumber:icNumber
    }).exec(function(error,user){
        if(error){
            console.log(error)
        } else if(!user){
            var err = new Error("user not found");
            err.status = 401;
            console.log(err);
        }// if user exists
        bcrypt.compare(password, user.password, function(error,result){
            if(result === true){
                return callback(null, user);
            } else {
                return callback()
            }
        })
    })
}

userSchema.pre("save", function(next){
    const user  = this;
    bcrypt.hash(user.password, 10,(err, hash)=>{
        if(err){
            return next();
        }
        user.password = hash;
        next();
    });
});

const user = mongoose.model("user", userSchema); 
module.exports = user


