//Destructuring and Spread

//Destructing Arrays

const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)

//if we use coma ',' we can skip some values at certain index
const numbers2 = [1, 2, 3]
let [numOne2, , numThree2] = numbers2 //2 is omitted

console.log(numOne2, numThree2)

//we can add values and give values for undefined
const names2 = [undefined, 'Brook', 'David']
let [
  firstPerson2 = 'Asabeneh',
  secondPerson2,
  thirdPerson2,
  fourthPerson2 = 'John'
] = names2

console.log(firstPerson2, secondPerson2, thirdPerson2, fourthPerson2)  

//we can get few of the first elements an get the remaining using spread operator(...)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

//Destructuring during iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

const fullStack2 = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack2) {
console.log(first, second, third)
}
//Destructuring Object
//destructure the name=key or property of the object

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)

//Renaming during structuring

const rectangle2 = {
  width: 20,
  height: 10,
  area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle2

console.log(w, h, a, p)

//If the key is not found in the object the variable will be assigned to undefined. 

//if the key is not in the object we can give a deafult value 

const rectangle3 = {
  width3: 20,
  height3: 10,
  area3: 200
}
let { width3, height3, area3, perimeter3 = 60 } = rectangle3

console.log(width3, height3, area3, perimeter3) 

const rectangle4 = {
  width4: 30,
  height4: 10,
  area4: 200,
  perimeter4: 80
}
let { width4, height4, area4, perimeter4=60 } = rectangle4
console.log(width4, height4, area4, perimeter4) 

//Object parameter without destructuring
// Without destructuring
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) 

//Another Example
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// Let us create a function which give information about the person object without destructuring

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))

//Object parameter with destructuring


const calculatePerimeter2 = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter2(rect)) // 60

// Let us create a function which give information about the person object with destructuring
const getPersonInfo2 = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ')
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo2(person))


//Destructuring object during iteration
const todoList = [
  {
    task:'Prepare JS Test',
    time:'4/1/2020 8:30',
    completed:true
  },
  {
    task:'Give JS Test',
    time:'4/1/2020 10:00',
    completed:false
  },
  {
    task:'Assess Test Result',
    time:'4/1/2020 1:00',
    completed:false
  }
  ]
  
  for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
  }

  //Spread or Rest Operator
  //Spread operator to get the rest of array elements
  /*const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
​
console.log(num1, num2, num3)
console.log(rest)*/

//Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

//Spread operator to copy object
//Modifying or changing the object while copying
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user,title:'instructor'}
console.log(copiedUser)


//Spread operator with arrow function

const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)


const sumAllNums2 = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
  
}

console.log(sumAllNums2(1, 2, 3, 4, 5))

