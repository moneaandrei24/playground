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

//Array.prototype.reduce()
//!!!

//Array.prototype.forEach()

//String.prototype.slice()
/*-it returns a sliced string without modifing the string
  -it has 2 parameters: the index where the string will begin to be sliced and 
   the index where it stops
  -it can be used with negative index 
   */

   const str1 = "The morning is upon us."; 
const str2 = str1.slice(1, 8);
const str3 = str1.slice(4, -2);
const str4 = str1.slice(12);
const str5 = str1.slice(30);

console.log(str2);
console.log(str3); 
console.log(str4); 
console.log(str5)

//String.prototype.split()
/*
-it returns an array with the string as a single element
-the first parameter is the spliting rule: '' ; ' ' ; or regular expresions
-the second parameter is the number of items that will be splited
*/

const str = 'The quick brown fox jumps over the lazy dog.';

const words3 = str.split(' ');//it returns item
console.log(words3[3]);


const chars = str.split('');//it returns letter
console.log(chars[8]);


const strCopy = str.split();
console.log(strCopy);



const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

const re = /\s*(?:;|$)\s*/;
const nameList = names.split(re);

console.log(nameList);

const myString = "Hello World. How are you doing?";
const splits = myString.split(" ", 3);//it returns the first 3 items in an array

//String.prototype.includes()

/*
-the first parameter is a string
-the second parameter is the index you want the search to bagin
-it search the parameter string and it returns true if it exist in the string otherwise false
*/

const str7 = "To be, or not to be, that is the question.";

console.log(str7.includes("To be")); 
console.log(str7.includes("question")); 
console.log(str7.includes("nonexistent")); 
console.log(str7.includes("To be", 1)); 
console.log(str7.includes("TO BE")); 
console.log(str7.includes(""));


//String.prototype.replace()

/*
-he replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement.
-it has two parameters
-first parameter is the part of the string that will be replaced: string or regExp
-the second parameter is the replacement or function
-it won t change the original string
*/

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

const regex = /Dog/i;
const regex2 = /Dog/gi;
console.log(p.replace(regex, 'ferret'));
console.log(p.replace(regex2, 'ferret'));

const re2 = /(\w+)\s(\w+)/;
const str8 = "Maria Cruz";
const newstr = str8.replace(re2, "$2, $1");
console.log(newstr); // Cruz, Maria

//$n-Inserts the nth (1-indexed) capturing group where n is a positive integer less than 100.

//String.prototype.trim()
/*
-The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
-To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().
*/


const greeting = '   Hello world!   ';

console.log(greeting);

console.log(greeting.trim());

//String.prototype.charCodeAt()
//!!

//String.prototype.match()

/*
-The match() method retrieves the result of matching a string against a regular expression.
-it returns array
*/

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex3 = /[A-Z]/g;//all upperCase letters
const found3 = paragraph.match(regex3);

console.log(found3);

//When the regexp parameter is a string or a number, it is implicitly converted to a RegExp by using new RegExp(regexp).

const str9 =
  "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
const str10 =
  "My grandfather is 65 years old and My grandmother is 63 years old.";
const str11 = "The contract was declared null and void.";
str9.match("number"); // "number" is a string. returns ["number"]
str9.match(NaN); // the type of NaN is the number. returns ["NaN"]
str9.match(Infinity); // the type of Infinity is the number. returns ["Infinity"]
str9.match(+Infinity); // returns ["Infinity"]
str9.match(-Infinity); // returns ["-Infinity"]
str10.match(65); // returns ["65"]
str10.match(+65); // A number with a positive sign. returns ["65"]
str11.match(null); // returns ["null"]

//String.prototype.startsWith()

/*-The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
  -first parameter is the character that the string should begin with
  -the second is the index where the character should be placed
*/

const str12 = 'Saturday night plans';

console.log(str12.startsWith('Sat'));
// Expected output: true

console.log(str12.startsWith('Sat', 3));
// Expected output: false

//String.prototype.endsWith()
 // same as //String.prototype.startsWith() but for the end of the string


 //String.prototype.padEnd()

 /*
 -it adds length to string
 -the first parameter will be the new length
 -the second parameter will be the pattern which filles the empty slot, if the pattern is too big 
 the empty slots will be filled with how many elements it is needed 
 */

 const str13 = 'Breaded Mushrooms';
console.log(str13.padEnd(25, '.'));
const str14 = '200';
console.log(str14.padEnd(5));

//String.prototype.padStart()
//same as //String.prototype.padEnd() but in the start


//String.prototype.toUpperCase()
//String.prototype.toLowerCase()
  // turns string to upper/lower case