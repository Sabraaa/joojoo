'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'TAP air Portuagal';
const plane = 'A320';
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1))

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[first]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    // console.log(`pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

// const rest1 = {
//   name: 'Capri',
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// const rest = new Map();
// rest.set('name', 'sabrasphere')

// rest.set(1,'amat')
// rest.set(2,'un yeki amat')

// console.log(rest)

// const orderSet = new Set(['sag', 'gorbi', 'gorbi', 'khar', 'sag', 'gorbi']);
// console.log(orderSet);
// console.log(new Set('Sabra'));
// console.log(orderSet.size);
// console.log(orderSet.has('sag'));
// orderSet.add('meow');
// console.log(orderSet);
// for (const order of orderSet) console.log(order);
// const staff = [
//   'waiter',
//   'chef',
//   'waitress',
//   'waiter',
//   'manager',
//   'chef',
//   'waitress',
// ];
// const staffSet = new Set(staff)
// console.log(staffSet)
// console.log(`there is ${staffSet.size} job positions here in this restaurant.`)
// console.log([...staffSet])
// console.log(`my full name has ${new Set('SabraAkhavanPaskiyabi').size} unique letters`)
// const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ??= 10;
// rest2.numGuest ||= 10;
// console.log(rest1)
// console.log(rest2)

// const ingredients = [
//   prompt("Let's make a pasta! ingredient 1?"),
//   prompt('Great! ingredient 2?'),
//   prompt('Allmost there! ingredient 3?'),
// ];
// console.log(ingredients)
// restaurant.orderPasta(...ingredients)

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log('1: ', restaurantName, '2: ', hours, '3: ', tags);

//setting default values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a,b);

//nested objects
const {
  fri: { open: qq },
} = hours;
// console.log(qq);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
// console.log(i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr;
// console.log(x, y, z, a, b, c, arr);
// let [first, , second] = restaurant.categories;
// console.log(first, second);

// [first, , second] = [second, , first];
// console.log(first, second);

// const temp = first;
// first = second;
// second = temp;

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
// console.log(newArr);

//copy arr
const mainManuCopy = [...restaurant.mainMenu];
//join 2 arrays
const mergeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(mergeMenu)

//objects
const newResturaunt = { ...restaurant, founder: 'sabra', foundYear: 2017 };
// console.log(newResturaunt)

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [player1, player2] = game.players;
// //   const player1=[...game.players]
// //   const player2=[...game.players]
// console.log(player1);
// console.log(player2);

// const [gk1, ...fieldPlayers1] = player1;
// const [gk2, ...fieldPlayers2] = player2;

// console.log(gk1);
// console.log(fieldPlayers1);
// console.log(gk2);
// console.log(fieldPlayers2);

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);

// const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...Players) {
//   console.log(`${Players.length} goals were scored`);
// };
// printGoals(...game.scored);

// team1 < team2 && console.log('Team1 is more likely to win')
// team1 > team2 && console.log('Team2 is more likely to win')
