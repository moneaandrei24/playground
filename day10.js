//SET AND MAPS

//SETS
/*
-Set is an iterable object and we can iterate through each elements.
- Set can only contains unique elements.*/

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

//Adding an element to a set
// use .add()
//use .size to see see the size of the Set

const companies = new Set() // creating an empty set
console.log(companies.size) // 0

companies.add('Google') 
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size) 
console.log(companies)

//We can also use loop to add element to a set.
const companies2 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies2) {
  setOfCompanies.add(company)
}
console.log(setOfCompanies)

//Deleting an element a set
// use .delete('content')
console.log(companies.delete('Google'))
console.log(companies.size) 
console.log(companies)

//Checking an element in the set
//use .has()

console.log(companies.has('Apple')) 
console.log(companies.has('Facebook')) 

//Clearing the set
//use .clear()
companies.clear()
console.log(companies)

//example how to use set

const languages2 = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages2)
console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
console.log(langSet.size) // 4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages2.filter((lng) => lng === l)
  console.log(filteredLang) // ["English", "English", "English"]
  counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

//Other use case of set. For instance to count unique item in an array.

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)

//Union of sets
// A U B

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//Intersection of sets
//A n B

let a1 = [1, 2, 3, 4, 5]
let b1 = [3, 4, 5, 6]

let A1 = new Set(a1)
let B1 = new Set(b1)

let c1 = a1.filter((num) => B1.has(num))
let C1 = new Set(c1)

console.log(C1)

//Difference of sets
let a2 = [1, 2, 3, 4, 5]
let b2 = [3, 4, 5, 6]

let A2 = new Set(a2)
let B2 = new Set(b2)

let c2 = a2.filter((num) => !B2.has(num))
let C2 = new Set(c2)

console.log(C2)

//MAP
//Creating an empty Map
const map = new Map()
console.log(map)

//Creating an Map from array
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map2 = new Map(countries)
console.log(map2)
console.log(map2.size)

//Adding values to the Map
//use .set('value1','value2')


const countriesMap = new Map()
console.log(countriesMap.size) // 0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)

//Getting a value from Map
//use .get()

console.log(countriesMap.get('Finland'))

//Checking key in Map
//use .has()
//Check if a key exists in a map using has method. It returns true or false.

console.log(countriesMap.has('Finland'))


//Getting all values from map using loop
for (const country of countriesMap) {
  console.log(country)
}

for (const [country, city] of countriesMap){
  console.log(country, city)
 }