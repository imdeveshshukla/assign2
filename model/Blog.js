const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{type:String,required:true},
    desc:{type:String},
    img:{type:String},
    delete:{type:Boolean}
})

const blog = mongoose.model('Blog', blogSchema);
module.exports = blog;