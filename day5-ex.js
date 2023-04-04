let empty=Array()
console.log(empty)

let ex2=Array(6)
console.log(ex2)

console.log(ex2.length)

let arr=Array(1,2,3,4,5)
console.log(arr[0],arr[2],arr[4])

let mixedDataTypes= ['rice',true,NaN,56,null,undefined]
console.log(mixedDataTypes.length)

let itCompanies= ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

console.log(itCompanies)

console.log(itCompanies.length)

console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length -1])

console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

console.log(itCompanies[0].toUpperCase())
console.log(itCompanies[1].toUpperCase())
console.log(itCompanies[2].toUpperCase())
console.log(itCompanies[3].toUpperCase())
console.log(itCompanies[4].toUpperCase())
console.log(itCompanies[5].toUpperCase())
console.log(itCompanies[6].toUpperCase())

let itCompanies3= ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
itCompanies3.splice(5,0,'and')
console.log(itCompanies3.join(' ')+'are big companies')
//????

let ex13=prompt('Insert a company')
let exist=itCompanies.indexOf(ex13)
 if (exist === -1){
  console.log(ex13,'is not found')
 }else{
  console.log(ex13)
 }


//???
let itCompanies2= ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

console.log(itCompanies2.sort())

console.log(itCompanies.reverse())

let itCompanies4= ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies4.slice(0,3))


console.log(itCompanies4.slice(Math.floor(itCompanies4.length-3),Math.floor(itCompanies4.length)))

console.log(itCompanies4.slice(Math.floor(itCompanies4.length/2),Math.floor(itCompanies4.length/2+1)))

console.log(itCompanies4.splice(1,itCompanies4.length))

let itCompanies5= ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

console.log(itCompanies5.splice(Math.floor(itCompanies5.length/2),1))
console.log(itCompanies5)

let itCompanies6= ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
console.log(itCompanies6.splice(itCompanies6.length-1,1))
console.log(itCompanies6)

console.log(itCompanies6.splice(0,itCompanies.length-1))
console.log(itCompanies6)

//LEVEL2
//1
//2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text)

let textmod=text.replace(/[.,]/g,'')
let ara=textmod.split(' ')
console.log(ara)
console.log(ara.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)

shoppingCart.push('Sugar')
console.log(shoppingCart)

shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
console.log(shoppingCart)

shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea')
console.log(shoppingCart)

//4

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
  'Kenya',
  
  
  
]

let check= countries.indexOf('Ethiopia')

if(check!==-1){
  console.log('ETHIOPIA')
}else{
  
  countries.push('Ethiopia')
    console.log(countries)
}

//5
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
let check2=webTechs.indexOf('Sass')

if(check2!==-1){
  console.log('Sass is a CSS preprocess')
}else{
  
  webTechs.push('Sass')
    console.log(webTechs)
}

//6

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)

console.log(fullStack)

//LEVEL 3

//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())
console.log(ages.splice(0,1))
console.log(ages.splice(ages.length-1,1))

if(ages.length%2===0){
  console.log(ages.splice(Math.floor(ages.length/2-1),2))
}else{
  console.log(ages.splice(ages.length/2-1,1))
}

//????

console.log(ages.splice(ages.length-1,1)-ages.splice(0,1))

//????

//2
if(countries.length%2===0){
  console.log(countries.splice(Math.floor(countries.length/2-1),2))
}else{
  console.log(countries.splice(countries.length/2-1,1))
}

//3
let p1= countries.slice(0,countries.length/2-1)
let p2= countries.slice(countries.length/2-1,countries.length-1)

if(p1.length===p2.length){
  console.log(p1,p2)
}else{
  
  console.log('iaoncur')


}
//?????



