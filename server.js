import { MongoClient } from "mongodb";

let client;

export const initializeConnection = async () =>{
    client = await MongoClient.connect("mongodb://localhost:27017/allhadith",{
    
    });
}

export const getConnection = dbname =>{
    const db = client.db(dbname);
    return db
}

