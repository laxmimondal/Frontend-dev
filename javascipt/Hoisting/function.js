//function Hoisting--function apne current scope ke andar sbse top mein shift hojata h 
// saymyName("Babbar");

// //first we are declaring the funtion
// function saymyName(finalName) {
//     console.log(finalName);
// }
//  //then --function call
// // saymyName("Babbar");

//using function expression---reference error
hello();
let hello = function () {
    console.log("hello jiiiiiiii");
}