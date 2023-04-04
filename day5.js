//ARRAYS

/*
-it can store multiple values
-it can contain different data types
-data types are changeable
-an array is created inside Array() or []
*/

const arr1= Array()
console.log(arr1) 

const arr2 = []
console.log(arr2)

//Length of an array.with 'length' property(name of the variable+.length)
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] 
const fruits = ['banana', 'orange', 'mango', 'lemon'] 

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

//Array can contain different data types
const arr3 = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] 
console.log(arr3)

//An array can be created useing 'split'

let js = 'JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript)

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')
console.log(companies) 

/*For list valueas with "," between them " ',' " is used 
and for sentences/text " ' ' " */

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')
console.log(words)

/*Index in arrays
-it starts from 0
   ['banana','orange','mango','lemon']
       0         1       2       3=-1
  !!the last index number can be -1
*/

//accesing index : variable name + [number of index]

const fruits2 = ['banana', 'orange', 'mango', 'lemon']
console.log(fruits2[0])
console.log(fruits2[3])

const numbers2 = [0, 3.14, 9.81, 37, 98.6, 100]
let lastIndex = numbers.length - 1;
console.log(numbers2[lastIndex])

/*  Modifying array element
- name of the variable + [index of the element]= index of the replacing element
*/
const numbers3 = [1, 2, 3, 4, 5]
numbers3[0] = 10     
numbers3[1] = 20      

console.log(numbers3) 


//-name of the variable + [index of the element]='anything else'
const countries = [
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
  'Kenya'
]

countries[0] = 'pateu'
console.log(countries)

//Methods to manipulate an array

//1 Array : creates an array
// inside the '()' is written the number of elements or a string/some strings

const arr4 = Array('orez','pateu') 
console.log(arr4)

//2 fill: Fill all the array elements with a static value

const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)

// concat : it connects two arrays

const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)

console.log(thirdList)

//length: the size of the array
const numbers4 = [1, 2, 3, 4, 5]
console.log(numbers4.length)

/*indexOf :To check if an item exist in an array.
 If it exists it returns the index else it returns -1.
 */

 const numbers5 = [1, 2, 3, 4, 5]

console.log(numbers5.indexOf(5)) 
console.log(numbers5.indexOf(0)) 
console.log(numbers5.indexOf(1)) 

/*lastIndexOf: It gives the position of the last item in the array. 
If it exist, it returns the index else it returns -1.*/

const numbers6 = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers6.lastIndexOf(2)) 
console.log(numbers6.lastIndexOf(0)) 
console.log(numbers6.lastIndexOf(1)) 

/*includes:To check if an item exist in an array. 
If it exist it returns the true else it returns false.
*/

const numbers7 = [1, 2, 3, 4, 5]

console.log(numbers7.includes(5)) 
console.log(numbers7.includes(0)) 
console.log(numbers7.includes(1)) 

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] 

console.log(webTechs.includes('Node')) 
console.log(webTechs.includes('C'))  

/*Array.isArray:To check if the data type is an array
-Array.isArray+(variable name)
*/

const numbers8 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers8))

//toString:Converts array to string

const numbers9 = [1, 2, 3, 4, 5]
console.log(numbers9.toString()) 

/* join :identical to toString but has parameters that
can be joined between items('' ; ' ' ; ', ' ; #)
-parameters can be anything inide ' '
*/

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.join()) 
console.log(names.join('')) 
console.log(names.join(' ')) 
console.log(names.join(', ')) 
console.log(names.join(' sex pula pistol '))
console.log(names.join(' # '))

//slice : To cut out a multiple items in range.
//it copies the range between (x,y) but without x included

const numbers10 = [1,2,3,4,5]

  console.log(numbers10.slice()) 
  console.log(numbers10.slice(0)) 
  console.log(numbers10.slice(0, numbers.length)) 
  console.log(numbers10.slice(2,5))

/*splice :It takes three parameters:Starting position,
number of times to be removed and number of items to be added.
first parameter-the index where the remove start
second parameter-the number of items removed
third parameter-the elements that are going to be placed 
where the remove was made

*/
const numbers12 = [1, 2, 3, 4, 5]
  numbers.splice()
  console.log(numbers12) 

const numbers13 = [1, 2, 3, 4, 5]
	numbers13.splice(0,1)
  console.log(numbers13)  

const numbers11 = [1, 2, 3, 4, 5]
	numbers11.splice(2,2,8,9,7)
  console.log(numbers11) 

//push:adding item in the end.
const arr5  = ['item1', 'item2','item3']
arr5.push('gaoaza')
console.log(arr5)

//pop:Removing item in the end.
const numbers14 = [1, 2, 3, 4, 5]
numbers14.pop() 
console.log(numbers14)

//shift:Removing one array element in the beginning of the array.
const numbers15 = [1, 2, 3, 4, 5]
numbers15.shift() 
console.log(numbers15) 

//unshift:Adding array element in the beginning of the array.
const numbers16 = [1, 2, 3, 4, 5]
numbers16.unshift(0) 
console.log(numbers16) 

//reverse:reverse the order of an array.
const numbers17 = [1, 2, 3, 4, 5]
numbers17.reverse() 
console.log(numbers17) 

//sort: arrange array in alfabetical order
const webTechs2 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs2.sort()
console.log(webTechs2) 

//ARRAY OF ARRAYS
//Array can store different data types including an array itself. Let us create an array of arrays
const firstNums = [1, 2, 3]
const secondNums = [1, 4, 9]

const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0]) // [1, 2, 3]

 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
 const backEnd = ['Node','Express', 'MongoDB']
 const fullStack = [frontEnd, backEnd]
 console.log(fullStack)   
 console.log(fullStack.length)  
 console.log(fullStack[0])  
 console.log(fullStack[1]) 

 /*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

   -arrays can be MODIFIED!!!!!!
   -first you do the modification
   -than console.log again*/