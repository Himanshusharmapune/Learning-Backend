//const fs = require("fs")
import fs from "fs/promises"
//console.log(fs) 


fs.writeFile("hima1.txt", "Himanshu is a good man",()=>{
    console.log("Reading file")
    fs.readFile("hima1.txt", (error,data)=>{
        console.log(error,data.toString())
    })

})

fs.appendFile("hima.txt","yoyoboy",(e,d)=>{
    console.log(d)
}) 