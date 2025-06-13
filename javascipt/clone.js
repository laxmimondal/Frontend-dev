
// object cloneing
let src = {
    ht: 140,
    wt: 60,
    color: "white"
};
//1. using spread operator
let dest = { ...src }
src.color = "black";
console.log("src: ", src);
console.log("dest: ", dest);

//2.using assign 
let neha = { roll: 45, s: 67, ty: 55 };
let shena = Object.assign({}, neha);

console.log("shena :", shena);

let dina = Object.assign({}, neha, src);
console.log(dina);

// 3.using iteration

let src3 = {
    ji: 78, ki: 88
};

let dest4 = {};
for (let key in src3) {
    let newkey = key;
    let value = src3[key];
    //insert newkey and clone src in dest4
    dest4[newkey] = value;
}
console.log(dest4);