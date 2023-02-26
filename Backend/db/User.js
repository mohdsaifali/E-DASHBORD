const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    emai:String,
    Password:String
})

module.exports = mongoose.model("users",userSchema)