//LEVEL 1

const countries = ['Finland', 'Sweden', 'Norway']

//1create an empty set
const newSet= new Set()

//2Create a set containing 0 to 10 using loop
let arr=[]
for(let i=0;i<=10;i++){
  arr.push(i)
}
let numbSet = new Set(arr)
console.log(numbSet)

//3Remove an element from a set

numbSet.delete(2)
console.log(numbSet)

//4Clear a set
numbSet.clear()
console.log(numbSet)

//5Create a set of 5 string elements from array
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

let set2= new Set(languages)
set2.add('Russia')
console.log(set2)

//6Create a map of countries and number of characters of a country
 let arr2=[]
for(let i=0;i<countries.length;i++){
  arr2.push([countries[i],countries[i].length])
}
let map=new Map(arr2)
console.log(map)

//LEVEL 2

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//1Find a union b

let c = [...a, ...b]
let C = new Set(c)

console.log(C)

//2Find a intersection b
let A = new Set(a)
let B = new Set(b)

let c2 = a.filter((num) => B.has(num))
let C2 = new Set(c2)

console.log(C2)

//3Find a with b
let A3 = new Set(a)
let B3 = new Set(b)

let c3 = a.filter((num) => !B3.has(num))
let C3 = new Set(c3)

console.log(C3)

//LEVEL3

//1How many languages are there in the countries object file.

let countries2=[
  { English: 91 },
  { French: 45 },
  { Arabic: 25 },
  { Spanish: 24 },
  { Russian: 9 },
  { Portuguese: 9 },
  { Dutch: 8 },
  { German: 7 },
  { Chinese: 5 },
  { Swahili: 4 },
  { Serbian: 4 }
]
console.log(countries2.length)

//2Use the countries data to find the 10 most spoken languages:

function mostSpokenLanguages(arr, numb){

  arr.sort(function (a, b) {
    if (a.count < b.count) return 1
    if (a.count > b.count ) return -1
    return 0
  })
  return arr.slice(0,numb)
}
console.log(mostSpokenLanguages(countries2,5))
console.log(mostSpokenLanguages(countries2,10))