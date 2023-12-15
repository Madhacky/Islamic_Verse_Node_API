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
        if (data.length == 0) {
            console.log("empty");
            res.status(422).json({
                "message": "hadith not found , pls check hadith number and book name!"
            }
            )
        } else {
            let bookName;
            switch(hadithh){
                case "muslim": bookName="Sahih Muslim";
                break;
                case "bukhari": bookName="Sahih al-Bukhari";
                break;
                case "abudawud": bookName="Sunan Abu Dawood";
                break;
                case "tirmidhi": bookName="Sunan al-Tirmidhi";
                break;
                case "nasai": bookName="Sunan al-Nasai";
                break;
                case "ibnmajah": bookName="Sunan ibn Majah";
                break;
                case "malik": bookName="Anas ibn Malik";
                break;
                default: console.log("error")
                
            }
            res.status(200).json({
                "hadith": data,
                "total hadith": `total hadith  ${data.length}`,
                "bookName":bookName
            });
        }

    } catch (error) {
        res.status(400).json({ errorMessage: error });
    }


});

module.exports = router