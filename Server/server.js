import { app } from "./app.js";
import dbConnect from "./src/DB/db_connect.js";

dbConnect().then(()=>{
    app.listen(3000, ()=>{
        console.log('Task Management server running')
    })
})
.catch((error)=>{
    console.log(error)
})