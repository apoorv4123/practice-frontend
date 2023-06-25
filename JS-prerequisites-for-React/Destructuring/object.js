let obj = {
    name: "Max",
    state: "Haryana",
    country: "India"
}

// Accessign object properties(values) using . or []
// let name = obj.name;
// let state = obj["state"];
// console.log(name,state)

// Destructuring
// the keys while destructuring have to be named same as in the defined object
// (variable name has to be the same name as the key used in the object)
// let {n,s,c}=obj;
// console.log(n,s,c); //undefined undefined undefined

// let {name, state, country} = obj;
// console.log(name, state, country);
// let {country} = obj;
// console.log(country);

//  extra
// let {name, state, country, extra} = obj;
// console.log(extra); // undefined
// default
// let {name, state, country, extra = "defualt value"} = obj;
// console.log(extra);

// this is how to assign an object properties' value to variable with different names
// let {name: firstName, state, country} = obj;
// console.log(firstName, state, country); 