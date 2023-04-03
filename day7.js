//FUNCTIONS
/*
-reusable block of code
-it is used to complete a certain task 
-it is custom(you can solve whatever you want)
-A function is declared by a function key word followed by a name, followed by parentheses ()
     function + name of the function + ()+{code goes here}
*/

//A function can be declared or created in couple of ways:
/*
-Declaration function
-Expression function
-Anonymous function
-Arrow function
*/

//FUNCTION DECLARATION
  //declare a function:
   function functionName() {
    // code goes here
  }

  //call a function:
  functionName()

//Function without a parameter and return

function square() {
  let num = 2
  let sq = num * num
  console.log(sq)
}
    
square()

function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers()

function printFullName (){
  let firstName = 'Asabeneh'
  let lastName = 'Yetayeh'
  let space = ' '
  let fullName = firstName + space + lastName
  console.log(fullName)
}

printFullName()

//Function returning value
  //it returns value instead of printing it

  function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())


function addTwoNumbers() {
  let numOne = 2
  let numTwo = 3
  let total = numOne + numTwo
  return total

}

console.log(addTwoNumbers())

//function with a parameter
 /*in a function we can pass different data types 
 (number, string, boolean, object, function) as a parameter.*/

 /*function functionName(parm1) {}
 functionName(parm1)*/

 function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10))

function square(number) {
  return number * number
}

console.log(square(9))

//Function with two parameters
  /*function functionName(parm1, parm2) {}
   functionName(parm1, parm2) */

   function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    console.log(sum)
  }
  sumTwoNumbers(10, 20) 

  function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  console.log(sumTwoNumbers(140, 20))

  function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'))
  
  //Function with many parameters
  /*function functionName(parm1, parm2, parm3,...){}
    functionName(parm1,parm2,parm3,...) */

    function sumAllNums() {
      let sum = 0
      for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
      }
      return sum
    }
    
    console.log(sumAllNums(1, 2, 3, 4)) 
    console.log(sumAllNums(10, 20, 13, 40, 10))  
    console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) 
    
    //Unlimited number of parameters in arrow function

    function sumAllNums(...args) {
      let sum = 0
      for (const element of args) {
        sum += element
      }
      return sum
    }
    
    console.log(sumAllNums(1, 2, 3, 4)) 
    console.log(sumAllNums(10, 20, 13, 40, 10))  
    console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)) 

    //Anonymous Function

    const anonymousFun = function() {
      console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
      )
    }

    //Expression Function

    const square2 = function(n) {
      return n * n
    }
    
    console.log(square2(2))

    //Self Invoking Functions

    let squaredNum = (function(n) {
      return n * n
    })(10)
    console.log(squaredNum)

    //Arrow Function
    const square3 = n => {
      return n * n
    }
    
    console.log(square3(2)) 

   
    const changeToUpperCase = arr => {
      const newArr = []
      for (const element of arr) {
        newArr.push(element.toUpperCase())
      }
      return newArr
    }
    
    const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
    console.log(changeToUpperCase(countries))
    
    //Function with default parameters

    function greetings(name = 'Peter') {
      let message = `${name}, welcome to 30 Days Of JavaScript!`
      return message
    }
    
    console.log(greetings())
    console.log(greetings('Asabeneh'))

    function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
    }
    
    console.log(generateFullName())
    console.log(generateFullName('David', 'Smith'))

    function weightOfObject(mass, gravity = 9.81) {
      let weight = mass * gravity + ' N' 
      return weight
    }
    
    console.log('Weight of an object in Newton: ', weightOfObject(100))
    console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))