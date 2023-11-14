import { getConnection } from "../../server.js";


export const hadiths =  {
    path:"/data",
    method:"post",
    handler: async (req,res) =>{
        const {hadithnumbers} = req.body
        const db = await getConnection("allhadith");
       
          
        //   const findResult = await db.findOne({}, options);
       
        const Bukhari = await db.collection("bukhari").find().toArray();


        res.status(200).json(Bukhari)
    }
}