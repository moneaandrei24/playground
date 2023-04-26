//Array.prototype.map()

/*
-it loops through the array and use a function on each element of the array
-it returns a new array with the modified elements
-functions are not aplied for empty slots in array
*/

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1)

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

const kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
console.log(reformattedArray)
console.log(kvArray);

const numbers2 = [1, 4, 9];
const doubles = numbers2.map((num) => num * 2);
console.log(doubles)

//Array.prototype.filter()

/*
-it creates a new array filed with elements that respect a certain condition
-the function must return a truthy or falsy value
*/

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);


function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered)

const fruits = ["apple", "banana", "grapes", "mango", "orange"];
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); 
console.log(filterItems(fruits, "an"));

let words2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words2.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);

//Array.prototype.values()


const array2 = ['a', 'b', 'c'];
const iterator = array2.values();

for (const value of iterator) {
  console.log(value);
}

const arr = ["a", "b", "c", "d", "e"];
const iterator2 = arr.values();
console.log(iterator2.next())

const arr2 = ["a", "b", "c", "d", "e"];
const values = arr2.values();
for (const letter of values) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}

//Array.prototype.slice()
/*
-it creates a new array that contains elements from the used array at a range of index
-arr.slice(1,3)- it slice elements from index 1 to 3
-first index must indicate an item that appears before the second index item
-the item indicated by the second index does not appear in the array
*/

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits2.slice(1,3);
console.log(citrus)
console.log(fruits2)

const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);
console.log(newCar)

console.log("myCar =", myCar);
console.log("myCar[0].color =", myCar[0].color);

//Array.prototype.splice()
/*
-it changes the content of an array by delete or replace existing elements
-it will change the content of the used array
-it takes 3 parameters 
   a=the index where the item/items will bigin to be be deleted or added
   b=the number of items deleted 
   c=the items that will be added
   Ex: arr.splice(a,b,"c")
-if b=0 zero elements will be removed   
-arr.splice(a)=> all elements will be deleted from index a
*/

const myFish = ["angel", "clown", "trumpet", "sturgeon"];
const removed = myFish.splice(0, 2, "parrot", "anemone", "blue");
console.log(myFish)
console.log(removed)

//Array.prototype.push()
//The push() method adds the specified elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);

const sports = ["soccer", "baseball"];
const total = sports.push("football", "swimming");

console.log(sports);
console.log(total);

//Array.prototype.unshift()

//The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array.

const array3 = [1, 2, 3];
console.log(array3.unshift(4, 5));
console.log(array3);

//Array.prototype.some()
/*
-it loops through the array until the function returns true than the function stops
-it has a function that returns truthy or falsy values
-it returns true if at least one element of the array satisfies the condition else return false
*/

const fruits3 = ["apple", "banana", "mango", "guava"];

function checkAvailability(arr, val) {
  return arr.some((arrVal) => val === arrVal);
}

console.log(checkAvailability(fruits3, "kela"))
console.log(checkAvailability(fruits3, "banana"))

//Array.prototype.find()
/*
-it loops through the array until the function returns true than the function stops
-it has a function that returns truthy or falsy values
-it returns the first element that satisfies the condition 
-if no element satisfies the condition it returs undefined
*/
const array4 = [5, 12, 8, 130, 44];
const found = array4.find(element => element > 10);
console.log(found);

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

function isCherries(fruit) {
  return fruit.name === "cherries";
}

console.log(inventory.find(isCherries));

const result2 = inventory.find(({ name }) => name === "cherries");
console.log(result2); 

  //If you need the index of the found element in the array, use findIndex().
    //-it returns the index of the first element that satisfies the condition
  const array5 = [5, 12, 8, 130, 44]; 
  const isLargeNumber = (element) => element > 13;
  console.log(array5.findIndex(isLargeNumber));
   //If you need to find the index of a value, use indexOf().
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));

//Array.prototype.sort()
//!!!!

//Array.prototype.at()
/*
-it is the equivalent of the bracked notation(arr[index]) but it can be 
used with negative notasion 
Ex:array[0] === array.at(0) both return the first item
*/

const cart = ["apple", "banana", "pear"];
function returnLast(arr) {
  return arr.at(-1);
}
const item1 = returnLast(cart);
console.log(item1)


//Array.prototype.concat()
/*
-The concat() method is used to merge two or more arrays.
-it doesn t change the existing array
-it returns a new array
*/
const array11 = ['a', 'b', 'c'];
const array22 = ['d', 'e', 'f'];
const array33= array11.concat(array22);

console.log(array33);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers3 = num1.concat(num2, num3);

console.log(numbers3);

//Array.prototype.every()

/*
-it has a function that returns truthy or falsey value
-it loops throughout the array,if any element is false the function stops
-it returns true if all elements satisfy the condition otherwise false
-it runs with empty solts
*/

const isBelowThreshold = (currentValue) => currentValue < 40;
const array6 = [1, 30, 39, 29, 10, 13];
console.log(array6.every(isBelowThreshold));

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); 
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); 

//Array.prototype.join()

 //it creates a string by concating the elements of an array
 //by deafult elements are separated by commas- arr.slice()
 /*but they can be separated by other symbols -arr.slice('')-words are attached
      -join('-')-words are separated by '-'
      -etc
 */

      const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());

console.log(elements.join(''));

console.log(elements.join('-'));
console.log(elements.join(' '));
console.log(elements.join('orez'));

//Array.prototype.pop()
//The pop() method removes the last element from an array and returns that element.
//This method changes the length of the array.

const myFish2 = ["angel", "clown", "mandarin", "sturgeon"];

const popped = myFish2.pop();

console.log(myFish2); 

console.log(popped); 

//Array.prototype.shift()
//The shift() method removes the first element from an array and returns that removed element. 
//This method changes the length of the array.

const array7 = [1, 2, 3];

const firstElement = array7.shift();

console.log(array7);

console.log(firstElement);
