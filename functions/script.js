'use strict';

const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  //   console.log(booking);
  bookings.push(booking);
};

createBooking('LH233');
const flight = 'LH234';
const sabra = {
  name: 'sabra akhavan',
  passport: 123456789,
};
// const checkIn = function (flightNum, passenger) {
//     flightNum = "LH999"
//     passenger.name="ms. " + passenger.name
//     if (passenger.passport===123456789) {
//         alert('Check in')
//     }else[
//         alert('Wrong passport')
//     ]
// }

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowercase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join();
// };

// const transformer = function (str, fn){
// console.log(`transformed str: ${fn(str)}`)

// }
// transformer("hey idiot!", upperFirstWord)

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greet = function(greeting) {
//   return function (name){
//     console.log(`${greeting} ${name}`)
//   }
// }
// greet('salam')('sabra');
// const greeterHi = greet('Hi');
// greeterHi('Steven');

// const addTax = (rate, value) => {
//   return value + value * rate;
// };
// console.log(addTax(10, 200));

// const addVAT = addTax.bind(null, 10)

// console.log(addVAT(200))

const addTax = function (value) {
 const addVAT = function () {
    return value + value * 0.1
  };
  return addVAT()
};
console.log(addTax(200))
