const mongoose = require("mongoose");

var reference = new mongoose.Schema({
    book: Number,
    hadith: Number

});

  const profileSchema = new mongoose.Schema({
    hadithnumber: Number,
    arabicnumber: Number,
    text: String,
    grades: Array,
    reference: reference
});

loadHadithModel=function(collectionName){
   
   return mongoose.model(collectionName,profileSchema);
}
module.exports = loadHadithModel;