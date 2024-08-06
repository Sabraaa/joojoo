'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
    console.log(`pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};

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
console.log(newArr);

//copy arr
const mainManuCopy = [...restaurant.mainMenu];
//join 2 arrays
const mergeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(mergeMenu)

//objects
const newResturaunt = {...restaurant, founder: "sabra", foundYear:2017 }
// console.log(newResturaunt)