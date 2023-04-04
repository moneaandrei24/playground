 /*numbers string boolean null undefined symbol = primitive data types
   objects and arrays =non-primitive data types*/
   //PRIMITIVE
   //they can be compared

   let numOne = 3
   let numTwo = 3

console.log(numOne == numTwo)
 
  //they can't be modified

  let word = 'Javasript'

  console.log(word)

  //NON-PRIMITIVE

  //it can be modified
  let nums = [1, 2, 3]
   nums[0] = 10

console.log(nums) 

//[1, 2, 3]=array
/*{
name:'Asabeneh',
role:'teaching',
country:'Finland'
}  =array */

/*Even if two non-primitive data types have the same properties and values, 
they are not strictly equal.*/


let numbers = [1, 2, 3]

console.log(nums == numbers)  // false

let userOne = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

let userTwo = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

console.log(userOne == userTwo) // false

//!!!Do not compare arrays, functions, or objects. !!!



//In JavaScript the Math Object provides a lots of methods to work with numbers.

const PI= Math.PI
console.log(PI)

console.log(Math.PI)
console.log(Math.round(PI))
console.log(Math.min(-5, 3, 20, 4, 5, 10))

//numbers don t necesary need to be declared for Math Object to work
//PI needs

console.log(Math.sin(270))

//RANDOM NUMBER GENERATOR

let randomNUM = Math.random()*11
console.log(randomNUM)

//Math.random():0-0.99999999
//Math.random()*11:0-10.99

let roundnumbtothefloor=Math.floor(randomNUM)
console.log(roundnumbtothefloor) 

let space = ' ' 
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let fullName = firstName + space + lastName; 
console.log(fullName);

let country = 'Finland'
let city = 'Helsinki'
let age = 250


let personInfo= fullName + '. I am '+ age + '. I live in '+ country
console.log(personInfo)

/*A string could be a single character or paragraph or a page.
 If the string length is too big it does not fit in one line.
  We can use the backslash character (\) at the end of each line to indicate
   that the string will continue on the next line. Example:*/

   const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

//Escape Sequences in Strings

/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
*/
// They have to be between strings

console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')


// If topic in console is between strings it doesn t need to be declared

console.log('Days\tTopics\tExercises')

var w1= 'Days'
var w2= 'Topics'
var w3= 'Exercises'

console.log(w1+'\t'+w2+'\t'+w3)

//Template Literals (Template Strings)

let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)

//is equal with

console.log('The sum of '+a+' and '+b+' is '+(a+b))


let language = 'JavaScript'
let job = 'teacher'



let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` 
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)

 /*Using a string template or string interpolation method, we can add expressions,
  which could be a value,
  or some operations (comparison, arithmetic operations, ternary operation).*/
  // use  : ${}

  let s = 2
let c = 3
console.log(`${s} is greater than ${c}: ${s > c}`)

//String Methods

   /*length: The string length method returns the number of 
   characters in a string included empty space.*/
   //it counts the number of letters and space from 0 to ...

   let js = 'JavaS    #$#%%$$%   cript'
console.log(js.length) 
   
   //string[...]-counts the number equivalent to the symbol/letter/space

   let string = 'JavasCript'
let firstLetter = string[0]

console.log(firstLetter) 
console.log(string.length)       
console.log(string.length -1)
    
   //toUpperCase(): this method changes the string to uppercase letters.
   

   console.log(string.toUpperCase())     // JAVASCRIPT

   //toLowerCase(): this method changes the string to lowercase letters.

   console.log(string.toLowerCase()) 

   /*substr(): It takes two arguments, 
   the starting index and number of characters to slice.*/

   console.log(string.substr(4,6))
   console.log(country.substr(3, 4))

   /*substring(): It takes two arguments, the starting index and the stopping index
    but it doesn't include the character at the stopping index.*/

    console.log(string.substring(0,4))     // Java
    console.log(string.substring(4,10))    // Script
   console.log(string.substring(4))       // Script

   //split(): The split method splits a string at a specified place.
   let string2 = '30 Days Of JavaScript'

console.log(string2.split())     
console.log(string2.split(' '))  
let firstName2 = 'Asabeneh'

console.log(firstName2.split())    
console.log(firstName2.split(''))  

    //if string contains multiple elements use (,) or ','

    let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  
console.log(countries.split(', '))

   //trim(): Removes trailing space in the beginning or the end of a string.

   let string3 = '   30 Days Of JavaScript   '

console.log(string3)
console.log(string3.trim(' '))


   /*charCodeAt(): Takes index and it returns 
   char code (ASCII number) of the value at that index*/

   let string4= '30 Days Of JavaScript'
console.log(string4.charCodeAt(3))        // D ASCII number is 68

    /*ndexOf(): Takes a substring and if the substring exists in a string
    it returns the first position of the substring if does not exist it returns -1*/

    
    console.log(string4.indexOf('D'))          
console.log(string4.indexOf('Days'))       
console.log(string4.indexOf('days'))       
console.log(string4.indexOf('a'))          
console.log(string4.indexOf('JavaScript')) 
console.log(string4.indexOf('Script'))     
console.log(string4.indexOf('script'))     

     /*lastIndexOf(): Takes a substring and if the substring exists in a string it returns
     the last position of the substring if it does not exist it returns -1*/

     let string5 = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string5.lastIndexOf('love'))     
console.log(string5.lastIndexOf('you'))        
console.log(string5.lastIndexOf('JavaScript')) 

     //concat(): it takes many substrings and joins them.

     let string6 = '30'
console.log(string6.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

    /*startsWith: it takes a substring as an argument and it checks if the string 
    starts with that specified substring. It returns a boolean(true or false).*/

    let string7= 'Love is the best to in this world'

console.log(string7.startsWith('Love'))   
console.log(string7.startsWith('love'))   
console.log(string7.startsWith('world'))  

   /*endsWith: it takes a substring as an argument and it checks if the strins
    ends with that specified substring. It returns a boolean(true or false).*/

    let string8 = 'Love is the most powerful feeling in the world'

console.log(string8.endsWith('world'))         
console.log(string8.endsWith('love'))          
console.log(string8.endsWith('in the world')) 

   /*search: it takes a substring as an argument and it returns the index 
   of the first match. The search value can be a string or a regular expression pattern.*/

   let string9 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string9.search('love'))          
console.log(string9.search(/javascript/gi))  

  /*match: it takes a substring or regular expression pattern as an 
  argument and it returns an array if there is match if not it returns null.
  Let us see how a regular expression pattern looks like.
   It starts with / sign and ends with / sign.*/

   /*let string10 = 'love'
let patternOne10 = /love/     // with out any flag
let patternTwo10 = /love/gi   // g-means to search in the whole text, i - case insensitive*/

let string10 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string10.match('love'))

let pattern = /love/gi
console.log(string10.match(pattern))   // it shows all 'love' included  in the string10

  

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

/*repeat(): it takes a number as 
argument and it returns the repeated version of the string.*/

let string11 = 'love'
console.log(string11.repeat(10))

//Checking Data Types


  //To check the data type of a certain variable we use the typeof method.

  console.log(typeof 'Asabeneh')  
  console.log(typeof firstName)   
  console.log(typeof 10)          
  console.log(typeof 3.14)        
  console.log(typeof true)        
  console.log(typeof false)       
  console.log(typeof NaN)         
  console.log(typeof job)         
  console.log(typeof undefined)   
  console.log(typeof null)        

  //Changing Data Type (Casting)
  