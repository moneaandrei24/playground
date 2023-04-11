//LEVEL1

//1 Display the countries array as a table
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)

//2 Display the countries object as a table
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]
console.table(users)

//3Use console.group() to group logs
console.group('users and countries')
console.table(users)
console.table(countries)
console.groupEnd

//LEVEL2

//1 10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10,'statement false' )

//2 Write a warning message using console.warn()
console.warn('fasole')

//3 Write an error message using console.error()
console.error('fasole')

//LEVEL3
//1 Check the speed difference among the following loops: while, for, for of, forEach

console.time('for')
let b=0
for (let i = 0; i <= 10; i++) {
i
}
console.timeEnd('for')

console.time('for of')
let a=[0,1,2,3,4,5,6,7,8,9,10]
for (let numb of a) {
  numb=numb**2
}
console.timeEnd('for of')

console.time('while')

let i = 1, n = 5;
while (i <= n) {
    i;
    i += 1;
}

console.timeEnd('while')

console.time('forEach')
let c=[0,1,2,3,4,5,6,7,8,9,10]
c.forEach(numb=>numb++)


console.timeEnd('forEach')







