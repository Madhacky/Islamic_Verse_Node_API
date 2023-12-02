
const express = require("express");
const app = express();
var cors = require('cors');
require('dotenv').config();

app.use(cors());
const searchHadithByNumber=require("./src/routes/searchHadithByNumber");
const getAllHadithByBookName=require("./src/routes/getHadithByBookName");
const dbConnection= require("./src/services/dbConnection")
dbConnection();
app.use("/api",searchHadithByNumber,);
app.use("/api",getAllHadithByBookName);

app.listen(process.env.PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", process.env.PORT);
});


