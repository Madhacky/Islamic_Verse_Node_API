
const express = require("express");
const app = express();
const PORT = 3000;



const searchHadithByNumber=require("./src/routes/searchHadithByNumber");
const getAllHadithByBookName=require("./src/routes/getHadithByBookName");
const dbConnection= require("./src/services/dbConnection")
dbConnection();
app.use("/api",searchHadithByNumber,);
app.use("/api",getAllHadithByBookName);

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});


