
/*BOOLEANS - data type that can have twe values : true and false
           - used in comparations
           */
 let truValue = 4 > 3 
 console.log(truValue)

 /*Truthy values

-All numbers(positive and negative) are truthy except zero
-All strings are truthy except an empty string ('')
-The boolean true
*/

/*Falsy values

0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
*/

/* UNDEFINED: -A declared variable with no value assigned
              -a functin that is not returning to it's value*/
let firstName
console.log(firstName)

// Null: means no value 
let empty= null
console.log(empty)






/* Arithmetic Operators
Arithmetic operators are mathematical operators.

Addition(+): a + b
Subtraction(-): a - b
Multiplication(*): a * b
Division(/): a / b
Modulus(%): a % b
Exponential(**): a ** b
*/
let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf)

/* Comparision Operators
-used to compare two values(the value is grater or less or equal to the other value)
 
==  -Equal in value only: Equivalent
=== -Equal in value and data type:Exactly equal
!=  -Not equal
>   -Grater than 
<   -Less than 
>=  -Grater than or equal to
<=  -Less than or equal to
*/

/*OBS!!: if a value is not true with == it will not be equal with ===.
Using === is safer than using ==.*/

/*Logical Operators : between two operands ex:(4 > 3 && 10 > 5)
- && : true if both are true 
       false if both are false

-||  : if one of them or both are true it turnes true 
-!   : it turns into the opposite value : if false - ture
                                          if true  - false
*/
const check = 4 > 3 && 10 < 5  
const check1 = 4 > 3 || 10 < 5  
let check2 = !(4 > 3)  
console.log(check,check1,check2)     

//Increment Operator:used to increase a value stored in a variable,symbol(+)
  //pre-increment
  let count1 = 0
console.log(++count1)        
console.log(count1) 
  //post-increment
  let count2 = 0
console.log(count2++)        
console.log(count2)

//Decrement Operator: the same as increment but the value decrease,symbol(-)

//Ternary Operators:allows to write a condition.
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
  
 
  let number = 5
  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
  number = -5
  
  number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)

//Operator Precedence






//WINDOW METHODS
 
/*Window alert() method:it displays an alert box with a message and an OK
button*/

/*alert(message)
alert('Welcome to 30DaysOfJavaScript')*/

/*Window prompt() method
The window prompt methods display a prompt box with an input on your browser 
to take input values and the input data can be stored in a variable.
 The prompt() method takes two arguments. The second argument is optional.*/

 /*prompt('required text', 'optional text')
 let number = prompt('Enter number', 'number goes here')
 console.log(number)*/

 /*Window confirm() method:
 The confirm() method displays a dialog box with a specified message,
 along with an OK and a Cancel button. 
 A confirm box is often used to ask permission from a user to execute something.
Window confirm() takes a string as an argument. Clicking the OK yields true value, 
whereas clicking the Cancel button yields false value.*/

/*const agree = confirm('Are you sure you like to delete? ')
console.log(agree) */


//Date Object

//Creating a time object
const now = new Date()
console.log(now)


//Getting full year

console.log(now.getFullYear()) 


//Getting month

console.log(now.getMonth()) 

//Getting date

console.log(now.getDate()) 

//Getting day

console.log(now.getDay())

//Getting hours

console.log(now.getHours()) 

//Getting minutes

console.log(now.getMinutes())

//Getting seconds
console.log(now.getSeconds())


/*GETTING TIME:This method give time in milliseconds starting from January 1, 1970.
It is also know as Unix time. We can get the unix time in two ways:*/

//Using getTime():
const now2 = new Date() //
console.log(now2.getTime()) 

//Using Date.now():
const allSeconds = Date.now() //
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)

