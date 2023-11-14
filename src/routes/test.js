import { getConnection } from "../../server.js";

export const testDb = {
    path:"/test",
    method:"post",
    handler: async (req,res) =>{
        const {user} = req.body
        const db = getConnection("testDb");
        const testData = await db.collection("testCollection").insertOne({
            user,
        })
        res.status(200).json({message:"Add hogaya bhai user"});
    }
}