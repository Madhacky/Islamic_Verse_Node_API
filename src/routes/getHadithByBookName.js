const express = require("express");
var bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const loadHadithModel = require("../models/haidithSchema")


//:)  get all hadith with book name

router.get('/getAllHadithByBookName', async (req, res) => {
    const hadithbook = req.query.bookName;

    const loadedHadith = loadHadithModel(hadithbook);
    const data = await loadedHadith.find();
    const count = await loadedHadith.find().count();
    console.log("total docs : " + count);
    res.status(200).json(data);
});

module.exports= router;