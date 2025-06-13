const sym1 = Symbol('id');
const sym2 = Symbol('id');

console.log(sym1 === sym2);  // false
//Even though both symbols have the same description 'id', they are different and unique.
let value1 = 12;
value1 = "Sample";
value1 = 34.67;
console.log(typeof (value1));
