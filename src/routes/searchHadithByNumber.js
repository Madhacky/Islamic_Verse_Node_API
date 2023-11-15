const express = require("express");
var bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
const loadHadithModel = require("../models/haidithSchema")


//:)  search hadith by hadith number and book name

router.post('/searchHadith', async (req, res) => {

    try {
        const hadithh = req.body.hadithbook;
        const loadedHadith = await loadHadithModel(hadithh);

        const data = await loadedHadith.find({ hadithnumber: req.body.hadithNumber });
        const count = await loadedHadith.find().count();
        console.log("total docs : " + count);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ errorMessage: error });
    }


});

module.exports = router