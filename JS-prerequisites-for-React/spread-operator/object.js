let obj1 = {
    name: "Max",
    address: {
        country: "India",
        state: {
            code: "DL",
            pin: "12345"
        }
    }
}

// let obj2 = obj1;
// obj2.name = "Tim"; // Both obj1 and obj2 names are updated
// console.log(obj1);
// console.log(obj2);

// let obj3 = {...obj1}; // SHALLOW COPY
// obj3.name= "Sam";
// console.log(obj1);
// console.log(obj3);
//console.log(...obj3);// Error
// obj3.address.country= "Nepal"; // Country is updated in both obj1 ans obj3 as address object is stored at anotehr location in heap memory
// console.log(obj3);
// console.log(obj1);
// So, we'll have to spread address object if we want to update name only on obj3

// let obj4 = {...obj1, address:{...obj1.address}};
// obj4.address.country = "Nepal";
// console.log(obj1);
// console.log(obj4);
// obj4.address.state.code=10; // code is updated in both as code is in state object
// console.log(obj4);
// comsole.log(obj1);
// So, we'll have to spread state object if we want to update only obj4

// let obj5 = { ...obj1, address: { ...obj1.address, state: { ...obj1.address.state } } }; // DEEP COPY: Har ek object ek naya address mile(We provide a new reference to every object)
// obj5.address.state.code = 10; // only obj5 is updated
// console.log(obj1);
// console.log(obj5);

// Shortcut for creating deep copy:
let obj6 = JSON.parse(JSON.stringify(obj1)); // obj1 ko string mein convert karke usko parke kiya aur obj6(Object) mein store kara dia
obj6.name = "Harry";
obj6.address.country = "Korea";
obj6.address.state.pin = 90;
console.log(obj1);
console.log(obj6);
