 
 /*
//these exports are called named exports
export const a = 10;
export const b = 30;

//this is a default export and can be imported by any name(check main.js)
const obj ={
    x:5,
    y:5
}
export default obj;
 */


//if you want to use require syntax then we have to remove type:"module" from package.json
module.exports ={
    a:1,
    b:4,
    c:5
}