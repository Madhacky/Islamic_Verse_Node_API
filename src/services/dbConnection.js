const mongoose = require("mongoose");
require('dotenv').config()
mongoose.set('strictQuery', false);


loadDbConnection = async function  (){
try {
    await  mongoose.connect(process.env.MONOG_URI).then((e) => {

        console.log("DB Connected");
    }); 
} catch (error) {
    console.log(error);
}

}

module.exports =loadDbConnection

