let arr = [1,2,3,4];

let newarr = [];// populate newarr[i] with arr[i]*2

// for(let i = 0; i <arr.length; i++){
//     newarr[i] = arr[i] * 2;
// }

// newarr = arr.map((value, idx) => {
//     console.log(value,idx);
// })
// console.log(arr); // [ 1, 2, 3, 4 ]
// console.log(newarr); // [ undefined, undefined, undefined, undefined ]

newarr = arr.map((value) => {
    return value * 2;
})
console.log(arr); // [ 1, 2, 3, 4 ]
console.log(newarr); // [ 2, 4, 6, 8 ]