import fs from "fs/promises"

let a = await fs.readFile("hima.txt")

console.log(a.toString()) 

let b = await fs.writeFile("hima.txt","\n lucky fella")