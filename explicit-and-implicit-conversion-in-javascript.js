let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = (Number(age)) + 5; // added Number() to age to make it a number rather than a string so it would actually add 25 and 5 rather than just outputting 255
console.log("Total Age: " + totalAge); 


let guests;
console.log(Boolean(guests)) // this is my example of an explicit type conversion as well as my use of an edge case, undefined.


console.log("153" -  53); // this is my example of an implicit type conversion