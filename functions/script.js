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

// const addTax = function (value) {
//   const addVAT = function () {
//     return value + value * 0.1;
//   };
//   return addVAT();
// };
// // console.log(addTax(200))

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\n(write option number)`
//       )
//     );
//     console.log(answer);

//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers}`);
//     }
//   },
// };
// // poll.registerNewAnswer();
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// // Data 1: [5, 2, 3]  Data 2: [1, 5, 3, 9, 6, 1]
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// const runOnce = function (){
//   console.log('just once')
// }
// (function() {
//   console.log("only once")
// }())

// (() => {console.log("only once but arrowed")})();

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker()
// booker()
// booker()
// console.dir(booker)

// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// h()
// f()
// g()
// f()

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`Boarding all ${n} passengers.`);
    console.log(`There are 3 GPs, each with ${perGroup} passengers.`);
  }, wait * 1000);
  console.log(`Boarding in ${wait}s.`);
};
const perGroup = 1000;
boardPassengers(180, 3);
