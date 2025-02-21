// Variables Activity
// Different ways to declare a variable

const fullName = "Dela Cruz, Juan";  // Constant (Cannot be reassigned nor redeclared)
let age = 21;                        // Let (Can be reassigned, cannot be redeclared)
var isEnrolled = true;               // Var (can be reassigned, can be redeclared)

// Logging values
console.log("Full Name:", fullName);
console.log("Age:", age);
console.log("Enrolled:", isEnrolled);

// Reassigning the values
//fullName = "A new one" (TypeError: Assignment to constant variable)
age = 22;  // Allowed (let can be reassigned)
isEnrolled = false;  // Allowed (var can be reassigned)


// fullName = "A New One"; //  Error: Assignment to a constant variable

console.log("Updated Age:", age);
console.log("Updated Enrollment Status:", isEnrolled);
