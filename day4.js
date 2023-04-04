//CONDITIONALS

//IF
/*used to check if a condition is true
 an execute the block code

 to create a condition we need 
 -"if" keyword
 -condition inside a parenthesis
 -block code code inside curly bracket {}
 */

 //if (condition) {block code}
 let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//if the condition is false it won't be any result
let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

//IF ELSE 
/*If condition is true the first block will be executed,
 if not the else condition will be executed.*/

/*
if (condition) {
  block code
} else {
  block code
}
*/

let num2 = 3
if (num2 > 0) {
  console.log(`${num2} is a positive number`)
} else {
  console.log(`${num2} is a negative number`)
}


num3 = -3
if (num3 > 0) {
  console.log(`${num3} is a positive number`)
} else {
  console.log(`${num3} is a negative number`)
}

//If Else if Else
// We use else if when we have multiple conditions.
//It takes the first true value andf it stops.
let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

//Switch
//same as else if else but it verifies all cases 

let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

let num3 = prompt('Enter number');
switch (true) {
  case num3 > 0:
    console.log('Number is positive');
    break;
  case num3 == 0:
    console.log('Numbers is zero');
    break;
  case num3 < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

//Ternary Operators

let isRaining2 = true
isRaining2
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  
