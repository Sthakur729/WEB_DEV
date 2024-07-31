//ARRAY OF OBJECT
// const alluser=[{
//     fName:"shubham",
//     gender:"male"
// },{
//     fName:"aayush",
//     gender:"male"
// },{
//     fName:"kavya",
//     gender:"female"
// }]
// for(let i=0;i<alluser.length;i++){
//     if(alluser[i][gender]=="male"){
//         console.log(alluser[i]["firstname"]) 
//     }
// }

//FUNCTIONS

// function calculateArithmatic(a,b,type){
//     if(type == "sum"){
//         return a+b;
//     }
//     if(type == "minus"){
//         return a-b;
//     }
// }
// const value=calculateArithmatic(1,2,"sum");
// console.log(value);

//PASSING THE FUNCTION AS ARGUMENT

/* function calculateArithmatic(a,b,arithmaticFinalFunction){
    const ans=arithmaticFinalFunction(a,b);
    return ans;
}
function sum (a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
const value=calculateArithmatic(1,2,sum);
console.log(value); */

function greet(){
    console.log("Hello Shubham");
}
function greetAlien(){
    console.log("hello alien");
}
setTimeout(greet, 3*1000);
setTimeout(greetAlien,2*1000);
setInterval(greet, 1*1000);// it  will after ever one second until we stop it