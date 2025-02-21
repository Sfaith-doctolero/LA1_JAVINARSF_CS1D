// Strings 

const firstName = "Stephanie";
const lastName = "Javinar";
let fullName = firstName + " " + lastName; 

console.log(fullName); // Concatenate
console.log(fullName.toUpperCase()); // Uppercase
console.log(fullName.toLowerCase()); // Lowercase
console.log(fullName.slice(0, 4)); // extract the first four numbers
console.log(fullName.includes("Javinar")); // checks if "Javinar" is found within " Stephanie Javinar"


//Conversion
let amount = "100";
console.log(Number(amount)); //string to number
console.log(String(100)); // number to string
console.log(parseFloat("99.5")); //string to decimal
