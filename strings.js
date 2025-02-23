// 1. Create variable name (favActorFirstName) & store your fav Actor name.
const favActorFirstName = "Tom";

// 2. Create variable name (favActorLastName) & store the last name of (FA).
const favActorLastName = "Cruise";

// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
const fullName = favActorFirstName + " " + favActorLastName;

// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
const uppercase = fullName.toUpperCase();

// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
let message = `My favorite actor is ${uppercase}. He is an American actor and producer.`;

// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
message += " His best-known movies include the Mission: Impossible series.";

// 7. Finally log all variables to the console using code runner in vscode.
console.log("Favorite Actor First Name:", favActorFirstName);
console.log("Favorite Actor Last Name:", favActorLastName);
console.log("Full Name:", fullName);
console.log("Uppercase Name:", uppercase);
console.log("Message:", message);
