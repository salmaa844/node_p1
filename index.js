import express from "express";
import {init} from"./routes.js";

const app = express();
const PORT =3000;

init(express,app);


app.listen(PORT,()=>{
    console.log(`server is runing in port ${PORT}`)
})
