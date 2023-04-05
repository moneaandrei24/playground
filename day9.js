//HIGHER ORDER FUNCTIONS
/* There are functions that can take other functions as a parameter and 
return a function as a value.*/

//CALLBACK 
/* A calback function is a function that can be used as a parameter and be 
returned inside the function*/

let callback =(m)=>{
  return m**2
}

function cube(calback, m){
  return calback(m)*m
}
console.log(cube(callback, 3))

/* .forEach calls a function for each element in an array.
 The forEach() method is not executed for empty elements.*/

 //Returning function
 //Higher order functions return function as a value ​

 const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))

//simplified

const numbers2 = [1, 2, 3, 4]

const sumArray2 = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray2(numbers))

//SETTING TIME

/*function sayHello() {
  console.log('Hello')
}
let myInterval=setInterval(sayHello, 1000)
 // it prints hello in every second, 1000ms is 1s

 function myStopFunction() {
  clearInterval(myInterval);
}*/

function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) 
// it prints hello after it waits for 2 seconds.

//Functional Programming
// buit in methods that replace loops

//forEach
/*
-used only with arrays
-It takes a callback function with elements,
       index parameter and array itself.
-The index and the array optional.
-it loops through the array
*/

let sum =0;
const numbers3 = [1, 2, 3, 4, 5];
numbers3.forEach(num => console.log(num))
console.log(sum)

let sum2 = 0;
const numbers4 = [1, 2, 3, 4, 5];
numbers4.forEach(num => sum += num)

console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((country) => console.log(country.toUpperCase()))

//map
/*
-it transforms the elements of an array
-It takes a callback function with elements, index , array parameter 
    and return a new array.
    */

    const numbers5 = [1, 2, 3, 4, 5]
const numbersSquare = numbers5.map((num) => num * num)

console.log(numbersSquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const countries2 = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

const countriesToUpperCase = countries2.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

const countriesToUpperCase2 = countries.map((country) => {
  return country.toUpperCase();
})//Arrow function(same result)

const countriesFirstThreeLetters = countries2.map((country) =>
  country.toUpperCase().slice(0, 3)
)
console.log(countriesFirstThreeLetters)

//filter
//Filter out items which full fill filtering conditions and return a new array.

const countriesContainingLand = countries2.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = countries2.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const countriesHaveFiveLetters = countries2.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)

const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

//reduce
/* 
it takes a callback function , it loops through the array
and take the accumulator and the curent value , and optional the initial value
*/

const numbers6 = [1, 2, 3, 4, 5]
const sum4 = numbers6.reduce((acc, cur) => acc + cur, 0)

console.log(sum4)

//every
//Check if all the elements are similar in one aspect. It returns boolean

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names2.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true

//find
//Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age)

const scores2 = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores2.find((user) => user.score > 80)
console.log(score)

//findIndex
//Return the position of the first element which satisfies the condition

const names3 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages3= [24, 22, 25, 32, 35, 18]

const result = names3.findIndex((name) => name.length > 7)
console.log(result)

const age3 = ages3.findIndex((age3) => age3 < 20)
console.log(age3) 

//some
//Check if some of the elements are similar in one aspect. It returns boolean

const names6 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools2 = [true, true, true, true]

const areSomeTrue = bools2.some((b) =>  b === true)

console.log(areSomeTrue) 

const areAllStr2= names6.some((name) => typeof name === 'number') 
console.log(areAllStr2) 

//sort
/*sort: The sort methods arranges the array elements either ascending
 or descending order. By default, the sort() method sorts values as strings.
 This works well for string array items but not for numbers.
 If number values are sorted as strings and it give us wrong result.
 Sort method modify the original array.
 It is recommended to copy the original data before you start using sort method.
*/

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) 
//elements are sorted alfabetically

const numbers7 = [9.81, 3.14, 100, 37]

console.log(numbers7.sort()) 
 //[100, 3.14, 37, 9.81]
 // 100 came first because as a string('100') begins with 1 and is seen as the smallest
//To avoid this, we use a compare call back function inside the sort method, which return a negative, zero or positive.

numbers7.sort(function (a, b) {
  return a - b
})

console.log(numbers7) // [3.14, 9.81, 37, 100]

numbers7.sort(function (a, b) {
  return b - a
})
console.log(numbers7) 

//Sorting Object Arrays

const users3 = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users3.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users3) 

