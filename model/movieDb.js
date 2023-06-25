const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://bharath:bharathviswam@firstclustertest.jgypz.mongodb.net/moviemstdb?retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected");
})
.catch((err=>console.log(err)));

let Schema = mongoose.Schema

const movieSchema = new Schema({
    moviename:String,
    year:String,
    actor:String,
    camera:String,
    actress:String,
    producer:String,
    director:String,
    language:String
})

var movieModel = mongoose.model('movie',movieSchema)

module.exports = movieModel 