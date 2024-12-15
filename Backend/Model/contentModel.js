const mongoose =require("mongoose")


const ContentSchema = new mongoose.Schema({
    title: {type:String, required:[true, "Title is required"]},
    category: {type:String, required:[true, "Category is required"]},
    image: {type:String, required:[true, "Image is required"]},
    description: {type:String, required:[true, "Description is required"]},
    type: {type:String, required:[true, "Type is required"]},
    group: {type:String, required:[true, "subcategory is required"]},
    createdAt:{type:Date, default: Date.now()},
})

module.exports = mongoose.model('Content',ContentSchema)