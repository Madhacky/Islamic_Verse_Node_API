// import express from 'express';
// import { initializeConnection } from './server.js';
// import cors from "cors";
// import { routes } from './src/routes/routes.js';

// const app = express();
// app.use(cors());
// app.use(express.json());


// routes.forEach(route =>{
//     app[route.method](route.path,route.handler)

// })



// initializeConnection().then(()=>{
//     app.listen(8000,()=>{
//         console.log("Db connected and server is up at 8000")
//     })
// })

const express = require("express");
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");

var bodyParser = require('body-parser');
const uri = "mongodb://127.0.0.1:27017/allhadith";

mongoose.connect(uri).then((e)=>{
    
    console.log("DB Connected");
});
var reference = new mongoose.Schema({
    book: Number,
    hadith:Number

});

const profileSchema = new mongoose.Schema({
    hadithnumber: Number,
    arabicnumber: Number,
    text: String,
    grades: Array,
    reference:reference
});


app.use(bodyParser.json());
app.post('/data', async (req, res) => {
    const hadithh=req.body.hadithtype;
    const profile = mongoose.model(hadithh, profileSchema);
    const data = await profile.find({hadithnumber:req.body.hadithnumberr});
    res.status(200).json(data);
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});

app.post("/addData", async (req, res) => {
    const data = new profile({
        hadithnumber: req.body.hadithnumber,
        arabicnumber: req.body.arabicnumber,
        text: req.body.text,
        grades: req.body.grades,
        reference:req.body.reference
    })
    await profile.insertMany(
        data
    ).then(() => {
        res.send(data)
    })

    // const data = new Model({
    //     Name: req.body.name,
    //     Age: req.body.age,
    //     phonenumber:req.body.phonenumber,
    //     grades:req.body.grades
    // });
    // const dataToSave = data.save();
    //     res.status(200).json(dataToSave)
})
