const express = require("express");
var bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const loadHadithModel = require("../models/haidithSchema")


//:)  get all hadith with book name

router.get('/getAllHadithByBookName', async (req, res) => {
    const hadithbook = req.query.bookName;
    const loadedHadith = loadHadithModel(hadithbook);
    const data = await loadedHadith.find().sort({"hadithnumber":1});
    const count = await loadedHadith.find().count();
    console.log("total docs : " + count);
    if(data.length==0){
        res.status(422).json({
            "message":"Pls check book name"
        })
    }else{
    res.status(200).json(data);
    }
});

module.exports= router;