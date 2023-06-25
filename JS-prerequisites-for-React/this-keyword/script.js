// check console of inspect window for index.html

// 1.
// console.log(this);// Window

// function fn(){
//     console.log(this); // Window
// }
// fn(); // global object is calling the function i.e. Window

// let obj = {
//     name: "Max",
//     func: fn
// }
// obj.func() // self object i.e. the object we created

// 2. Inner function
// function fn() {
//     console.log(this); // self object i.e. the object we created
//     function abc(){
//         console.log(this); // Window object
//     }
//     abc(); // ye function apne aap call ho rha hai so isse global object mil rha hai, so output is Window object
//     this.abc(); // error: script.js:24 Uncaught TypeError: this.abc is not a function
//                 //at Object.fn [as func] (script.js:24:10)
//                 //at script.js:30:5
//                 //fn @ script.js:24
//                 //(anonymous) @ script.js:30
// }
// let obj = {
//     name: "Max",
//     func: fn
// }
// obj.func();

// 3. To call inner abc function with self object, there are two methods of doing so: 
// 3.1 : bind function
// function fn() {
//     console.log(this); // self object i.e. the object we created : {name: 'Max', func: ƒ}
//     function abc(){
//         console.log(this); // self object i.e. the object we created : {name: 'Max', func: ƒ}
//     }
//     let ret = abc.bind(this) // bind function returns a complete function definition after binding the object definition of abc with this
//     ret(); 
// }
// let obj = {
//     name: "Max",
//     func: fn
// }
// obj.func();

// 3.2 : Arrow function : Make the inner function(abc) as arrow function
// when we create a function with function keyword then uska this vhi hota hai jo uska calling object hota hai
// when we declare an arrow function, then wo parent ke this ko apna this bana leta hai 
function fn() {
    console.log(this); // self object i.e. the object we created : {name: 'Max', func: ƒ}
    abc = () => {
        console.log(this); // self object i.e. the object we created : {name: 'Max', func: ƒ}
    }
    abc();
}
let obj = {
    name: "Max",
    func: fn
}
obj.func();