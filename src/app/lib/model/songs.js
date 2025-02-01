import mongoose from "mongoose";
const songModel = new mongoose.Schema({
    artists:Array,
    author:Object,
    category:Array,
    content:String,
    creator:Array,
    credits:String,
    excerpt:String,
    image:String,
    keywords:Array,
    meta_description:String,
    likes:String,
    published_date:String,
    seo:Object,
    slug:String,
    title:String,
    video:String,
    views:String,
})
export const Song = mongoose.models.songs || mongoose.model("songs",songModel)