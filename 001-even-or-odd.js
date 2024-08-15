// function evenOrOdd(number) {
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// function evenOrOdd(number) {
//   return number % 2 === 0 ? "Even" : "Odd";
//  }

const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

console.log(evenOrOdd(0), "Even");
console.log(evenOrOdd(7), "Odd");
console.log(evenOrOdd(8), "Even");
console.log(evenOrOdd(-42), "Even");
