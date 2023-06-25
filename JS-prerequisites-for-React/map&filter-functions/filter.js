let arr = ["apple", "banana", "orange", "melon"]

let newarr = [];

// for(let i = 0; i < arr.length; i++){
//     let fruit = arr[i];
//     if(fruit.length > 5) { 
//         newarr.push(fruit)
//     }
// }

// filtering out only those fruits whose length > 5:

// newarr = arr.filter(function(fruit,idx) {
//  return fruit.length > 5;
// })

newarr = arr.filter((fruit) => {
    // if(fruit.length > 5){
    //     return fruit;
    // }
    return fruit.length > 5;
})

console.log(arr);
console.log(newarr)