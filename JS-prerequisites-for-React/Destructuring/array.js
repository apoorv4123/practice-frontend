let arr = ["Hi!","I","am","Max"];

// To acces array elements using index and []
// let a = arr[0];
// let b = arr[1];
// console.log(a, b);

// To access array elements using Destructuring
// let [a,b,c,d] = arr;
// console.log(a,b,c,d);

// to skip an element(a value) in destructuring
// let [a1,b1,,d1] = arr;
// console.log(a1,b1,d1);

// let [a2,b2,c2,d2,extra] = arr;
// console.log(a1,b1,d1,extra);
// let [a3,b3,c3,d3,extra1='Bye'] = arr; // provide default value to extra
// console.log(a3,b3,d3,extra1);

// rest property
let [a4,a5, ...a] = arr;
console.log(a4, a5, a);
