import { log } from "./modules/logger.js";
import path from "path"

const fileName = "C:\Users\L. Salami\Documents\Elizabeth\Practice\Practice-nodejs\modules\logger.js"
const pathName = path.parse(fileName)
console.log(pathName)
// this ./ to signify current folder 
// this ../ parent folder 

function greeting (name){
return `hiya ${name}, how you doing?`
}

console.log(greeting('lii'))
console.log(log)


//npm init -y 
//npm install