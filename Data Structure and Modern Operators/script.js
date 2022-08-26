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
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
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

  // orderedDelivery: (obj) =>{
  orderedDelivery: ({
    time,
    address,
    mainIndex,
    starterIndex
  }) => {
    console.log(time, address, mainIndex, starterIndex);
  },

  orderPasta: (ing1, ing2, ing3) => {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients)
    console.log(otherIngredients)
  }
};

// /* PASSER UN OBJET EN ARGUMENT */
// console.log('/* PASSER UN OBJET EN ARGUMENT */');

// restaurant.orderedDelivery({
//   time: '22:30',
//   address: 'Costa del Sole, 25',
//   mainIndex: 5,
//   starterIndex: 1,
// });
// /* => {
//   time: '22:30',
//   address: 'Costa del Sole, 25',
//   mainIndex: 5,
//   starterIndex: 1
// } */

// /* LA DESTRUCTURATION D'OBJET */
// console.log("/* LA DESTRUCTURATION D'OBJET */");

// // CRÉÉE UNE VARIABLE ET RÉCUPERE SIMULTANÉMENT LA VALEUR STOCKE DANS LA CLÉ PORTANT LE MEME NOM DANS L'OBJET
// const {
//   name,
//   location,
//   mainMenu
// } = restaurant;
// console.log(name, location, mainMenu); // => Classico Italiano Via Angelo Tavanti 23, Firenze, Italy [ 'Pizza', 'Pasta', 'Risotto' ]

// // L'ÉCRITURE CI-DESSUS REVIENT À ÉCRIRE :

// // const name = restaurant.name
// // const location = restaurant.location
// // const mainMenu = restaurant.mainMenu
// // console.log(name,location,mainMenu)

// // ATTRIBUTION DE LA VALEUR CONTENUE DANS LA CLÉ À UNE NOUVELLE VARIABLE

// const {
//   name: restaurantName,
//   location: restaurantLocation,
//   starterMenu: InitialMenu,
// } = restaurant;
// console.log(restaurantName, restaurantLocation, InitialMenu); // => Classico Italiano Via Angelo Tavanti 23, Firenze, Italy [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// // VALEUR PAR DÉFAUT LORS DE LA DESTRUCTURATION D'OBJET
// console.log('/* Valeur par defaut avec la déstructuration */');

// // SI LA CLÉ EXISTE, ALORS LA CONST RECUPERERA SA VALEUR,SINON, ON LUI ATTRIBUT UNE VALEUR PAR DEFAUT

// const {
//   menu = [], mainMenu: main = []
// } = restaurant;
// console.log(menu, main); // => [] [ 'Pizza', 'Pasta', 'Risotto' ]

// // MUTATION DES VARIABLES
// console.log('/* Mutation de valeurs avec la déstructuration */');

// let a = 523;
// let b = 659;
// let obj = {
//   a: 25,
//   b: 10,
//   c: 69
// };
// // {a,b} = obj // => Ne fonctionne pas
// // JAVASCRIPT DEMANDE D'ENGLOBER LE TOUT ENTRE PARENTHÉSE POUR INTERPRÉTER CE QUE L'ON VEUT FAIRE
// ({
//   a,
//   b
// } = obj);
// console.log(`a = ${a} et b = ${b}`)

// // DESTRUCTURATION D'OBJET IMBRIQUÉ
// console.log("/* Déstructuration d'objet imbriqué */");
// // DANS L'OBJET ON INDIQUE LA CLÉ DE L'OBJET ET ON RÉCUPÉRE LA VALEUR DE CHACUNE DES PROPRIETE DANS CET OBJET PAR DESTRUCTURATION

// const {
//   fri: {
//     open,
//     close
//   },
// } = restaurant.openingHours;
// console.log(open, close);

// /* LA DESTRUCTURATION DE TABLEAU */
// console.log('/* LA DESTRUCTURATION DE TABLEAU */');

// const arr = [2, 3, 4]

// // SANS LA DESTRUCTURATION
// console.log('/* Sans déstructuration */');

// const d = arr[0];
// console.log(d); // => 2
// const e = arr[1];
// console.log(e); // => 3
// const f = arr[2];
// console.log(f); // => 4

// // AVEC DESTRUCTURATION
// console.log('/* Avec déstructuration */');

// const [x,y,z] = arr
// console.log(x,y,z); // => 2,3,4

// const [cat1,cat2] = restaurant.categories
// console.log(cat1,cat2) // => Italian, Pizzeria

// const [categorie1, ,categorie3] = restaurant.categories
// console.log(categorie1, categorie3) // => Italian, Vegetarian

// // CHANGER L'ORDRE DANS UN ARRAY
// console.log('/* Mutation de variables avec déstructuration */');

// let [mainCat, secondaryCat] = restaurant.categories;
// console.log(mainCat, secondaryCat); // => Italian, Pizzeria
// [mainCat, secondaryCat] = [secondaryCat, mainCat];
// console.log(mainCat, secondaryCat); // => Pizzeria, Italian

// // RÉCUPERATION DIRECTE DES VALEUR RETOURNER PAR UNE FONCTION
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(restaurant.order(2, 0)); // => [Garlic Bread, Pizza]
// console.log(starter, mainCourse); // => Garlic Bread, Pizza

// // TABLEAU IMBRIQUÉ

// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested
// console.log(i,j) // => 2 [5,6]

// const [l, , [m, n]] = nested;
// console.log(l, m, n); // => 2 5 6

// // Valeur par default
// const [p, q, r] = [6, 8];
// console.log(p, q, r); // => 6 8 undefined

// const [s = 1,  t= 1,  u= 1] = [12, 45];
// console.log(s, t, u); // => 12 45 1

const arr = [3, 4, 5];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); // => [ 1, 2, 3, 4, 5 ]
const newArr = [1, 2, ...arr];
console.log(newArr); // => [ 1, 2, 3, 4, 5]

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // => [ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]

const mainMenueCopy = [...restaurant.mainMenu];

const menu = [...mainMenueCopy, ...restaurant.starterMenu];
console.log(...menu);

// Iterables : array, strings, maps, sets. not object

const str = 'Anil';
const strArray = [...str];
console.log(strArray);
/*
const ingredients = [
  prompt("Let's make pasta! Ingredient 1 ? "),
  prompt("Ingredient 2 ? "),
  prompt("Ingredient 3 ? "),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients) */

// Objects

const newResaturant = {
  foundedIn: 1996,
  ...restaurant,
  founder: 'Giussepe'
}
console.log(newResaturant)
const restaurantCopy = {
  ...restaurant
}
restaurantCopy.name = "Istanbul kebab"
console.log(restaurantCopy.name) // => Istanbul kebab
console.log(restaurant.name) // => Classico Italiano

// REST PATTEN AND PARAMETERS

// Detructuration

//SPREAD, car il se trouve a droite du "="
const array = [1, 2, ...[3, 4]]
console.log(array) // => [1,2,3,4] 

// REST, car il se trouve a gauche du "="
const [a, , b, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(a, b, others)
// => Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
// L'élément ignogré n'est jamais pris en compte

// Object
const {
  sat,
  ...weekdays
} = restaurant.openingHours
console.log(sat, weekdays)
// => {open: 0, close: 24} {thu: {…}, fri: {…}}
//        sat                   weekdays

// Fonction
const add = function (...numbers) {
  console.log(numbers)
  // => [2, 5]
  // => [5, 3, 7, 2]
  // => [8, 3, 7, 2, 58, 47]
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  console.log(sum)
  // => 7
  // => 17
  // => 125
}

add(2, 5)
add(5, 3, 7, 2)
add(8, 3, 7, 2, 58, 47)

restaurant.orderPizza("mushroom", "cheese", "oignon", "olives")
// => mushroom ['cheese', 'oignon', 'olives']

console.log("---- OR ----")
// COURT CIRCUIT AVEC && ET ||
// They can use any datatype, return any datatype, shortcicuiting
console.log(3 || "anil")
// Dans le cas de "||" il considere toujour la premiere valeur comme "true" et il retournera celle là
console.log('' || 'Anil') // => "Anil"
console.log(true || 0) // => "true"
console.log(undefined || null) // => null
console.log(undefined || 0 || '' || 'Hello' || 23 || null)

// restaurant.numGuests = 23
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1) // => 23

const guests2 = restaurant.numGuests || 10
console.log(guests2) // => 10

console.log("---- AND ----")
console.log(0 && 'Anil') // => 0
console.log(7 && 'Anil') // => 'Anil' ; 7 est consideré comme "true" donc il passe l'expression suivant et la renvoi
console.log('hello'&&23&&null&&'jonas') // => null

if(restaurant.orderPizza){
  restaurant.orderPizza('mushroom', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')

