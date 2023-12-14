const express = require("express");
var bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const loadHadithModel = require("../models/haidithSchema")


//:)  get all hadith with pagination

router.get('/searchByKeyword', async (req, res) => {
    let hadithbook = req.query.bookName;
    let searchKeyword = req.query.Keyword;
    const loadedHadith = loadHadithModel(hadithbook);
    const data = await loadedHadith.find({$text:{$search:searchKeyword}});
    const count = data.length;
    console.log("total docs : " + count);
    if (data.length == 0) {
        res.status(422).json({
            "message": `no hadith found with ${searchKeyword}  keyword :)`
        })
    } else {
        res.status(200).json({
            "hadith": data,
            "total hadith": `total hadith with ${searchKeyword} keyword found is ${count}`
        });
    }
});

module.exports = router;