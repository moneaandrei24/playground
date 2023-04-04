/*SCOOPES 
Variables scoopes can be local or global

Global variables:it can be found anywhere in the file

let a = 'JavaScript' 
let b = 10 

Local variables are located in function blocks , if blocks ,loop blocks etc.

let a = 'JavaScript' -global
let b = 10 -global

function letsLearnScope() {
  console.log(a, b) 
  let value = false -local

  if (true) {
   
    let a = 'Python'-local
    let b = 20-local
    let c = 30-local
    let d = 40-local
    value = !value 
    console.log(a, b, c, value) // Python 20 30 true
  }*/

  /*OBJECTS 
  To create an object literal, we use two curly brackets.
  const person = {}

Now, the person object has firstName, lastName, age, location, skills and isMarried properties.
 The value of properties or keys could be a string, number, boolean, an object, null, undefined or a function.

 const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
 
GETTING VALUES OF AN OBJECT

using . followed by key name if the key-name is a one word
using square bracket and a quote*/

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) 



console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) 

console.log(person.getFullName()) 

//we can modify the content of an object after it gets created.

person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}

console.log(person)
console.log(person.getPersonInfo())

//OBJECT METHODS

//1 Object.assign: To copy an object without modifying the original object
const copyPerson = Object.assign({}, person)
console.log(copyPerson)

//2 Object.keys: To get the keys or properties of an object as an array

const keys = Object.keys(copyPerson)
console.log(keys) 
const address = Object.keys(copyPerson.address)
console.log(address) 

//3 Object.values:To get values of an object as an array

const values = Object.values(copyPerson)
console.log(values)

//4 Object.entries:To get the keys and values in an array
const entries = Object.entries(copyPerson)
console.log(entries)

//5hasOwnProperty: To check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))