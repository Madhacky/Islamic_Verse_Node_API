
const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

var bodyParser = require('body-parser');
const uri = "mongodb+srv://fraxplays06:hadith@cluster0.ajzcq7n.mongodb.net/allhadith";

mongoose.connect(uri).then((e) => {

    console.log("DB Connected");
});
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


app.use(bodyParser.json());
app.post('/searchHadith', async (req, res) => {
    const hadithh = req.body.hadithbook;
    const profile = mongoose.model(hadithh, profileSchema);
    const data = await profile.find({ hadithnumber: req.body.hadithNumber });
    const count = await profile.find().count();
    console.log("total docs : " + count);
    res.status(200).json(data);
});
//get all hadith with book name
app.get('/getAllHadithByBookName', async (req, res) => {
    const hadithbook = req.query.bookName;
    const profile = mongoose.model(hadithbook, profileSchema);
    const data = await profile.find();
    const count = await profile.find().count();
    console.log("total docs : " + count);
    res.status(200).json(data);
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


