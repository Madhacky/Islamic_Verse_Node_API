const express = require("express");
var bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const loadHadithModel = require("../models/haidithSchema")


//:)  get all hadith with pagination

router.get('/hadithByPageNumber', async (req, res) => {
    let hadithbook = req.query.bookName;
    let pageNumber =Number(req.query.pageNumber) ;
    let pageSize =Number(req.query.pageSize) ;
    let skip=(pageNumber-1)*pageSize;
    const loadedHadith = loadHadithModel(hadithbook);
    const data = await loadedHadith.find().skip(skip).limit(pageSize).sort({"hadithnumber":1});
    const count = await loadedHadith.find().count();
    console.log("total docs : " + count);
    if(data.length==0){
        res.status(422).json({
            "message":`Jazakallah no more hadith :) total hadith in this book  ${count}`
        })
    }else{
    res.status(200).json(data);
    }
});

module.exports= router;