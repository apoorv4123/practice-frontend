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

// let {name} = obj1;
// console.log(name);

// let {name, address} = obj1;
// console.log(name,address);

// To access country from within address
// let {address:{country}} = obj1
// console.log(country)
// let {address:{country:countryName}} = obj1// To access countryName with a different name
// console.log(countryName)

// To access code from within state
// let {address:{state:{code}}} = obj1;
// console.log(code);
// let {address:{state:{code:cd}}} = obj1; // access code with a different name
// console.log(cd);

// Access low and high values from today
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
}
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const { today: { low: lowToday } } = LOCAL_FORECAST
const { today: { high: highToday } } = LOCAL_FORECAST
console.log(lowToday, highToday);
