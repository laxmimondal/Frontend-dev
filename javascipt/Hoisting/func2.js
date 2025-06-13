// function greetme(greet, fullName) {
//     console.log("hello", fullName);
//     greet();
// }

// function greet() {
//     console.log("Heyy");
// }
// greetme(greet, "Laxmi");



function solve(number) {
    return function (number) {
        return number * number;
    }
}
let ans = solve();
console.log(ans(5));

// array of functions
const arr = [function add(a, b) {
    return a + b;
},
function sub(a, b) {
    return a - b;
},
function multiply(a, b) {
    return a * b;
}
];
let ans1 = arr[0];
console.log(ans1(5, 5));

function sayname(earth) {
    var earth = "gammma";
    console.log("hello " + earth);
}
sayname();