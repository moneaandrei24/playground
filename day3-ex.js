//1
var firstName= 'Monea'
var lastName= 'Andrei'
var country= 'Romania'
var age = 20
var isMarried= false
var year= new Date().getFullYear()
 console.log(firstName,lastName,country,age,isMarried,year)

//2
var numb1= '10'
var numb2= 10
console.log(typeof numb1 == numb2)
//3
var numb3= parseInt('9.8')
console.log(numb3==numb2)
//4
 //truthy: 'bread';76; true
 //falsey:  0 , undefined , false

//5
console.log(
  (4>3),
  (4>=3),
  (4<3),
  (4<=3),
  (4==4),
  (4===4),
  (4!=4),
  (4!==4),
  (4!='4'),
  (4=='4'),
  (4==='4')

)
var pyt= 'python'.length
var jrg= 'jargon'.length
console.log(pyt!=jrg)
 //6
 console.log(
  4 > 3 && 10 < 12,
4 > 3 && 10 > 12,
4 > 3 || 10 < 12,
4 > 3 || 10 > 12,
!(4 > 3),
!(4 < 3),
!(false),
!(4 > 3 && 10 < 12),
!(4 > 3 && 10 > 12),
!(4 === '4')
 )
 var drg= 'dragon'
 var pyt2= 'python'
 console.log(drg.includes('on')==pyt2.includes('on'))

 //7
 var now = new Date()
 console.log(now.getFullYear())
 console.log(now.getMonth())
 console.log(now.getDate())
 console.log(now.getDay())
 console.log(now.getHours())
 console.log(now.getMinutes())
 console.log(now.getTime())

 //LEVEL 2

 //1

  let base =prompt('Enter base', 'base')
  let height =prompt('Enter height', 'height')
  let area =0.5 * base * height
  console.log(area)

 //2
 
 let a= prompt('Enter \'a\' value','a value')
 let b= prompt('Enter \'b\' value','b value')
 let c= prompt('Enter \'c\' value','c value')
 let perimeter =parseFloat(a)+parseFloat(b)+parseFloat(c)
 console.log(perimeter)

 //3

 let length=prompt('Enter \'length\' value','length value')
 let width=prompt('Enter \'width\' value','width value')
 let area2= parseFloat(length ) * parseFloat(width)
 let perimeter2=parseFloat(2) * (parseFloat(length ) + parseFloat(width))
 console.log(area2)
 console.log(perimeter2)

 //4

 let r=prompt('Enter \'Radius\' value','\'Radius\'value')
 let pi=3.14
 let areacircle=parseFloat(r)*parseFloat(r)*pi
 console.log(areacircle)

 //9
 let hours3=prompt('Enter hours','value')
 let rate=prompt('Enter rate per hour','value')
 let earning=parseFloat(hours3)*parseFloat(rate)
 console.log('Your weekly earning is '+earning)



 //10
var name2 ='Andrei'
var lngth= (name2.length<7)
  lngth
   ? console.log('Your name is short')
   : console.log('Your name is long')

//11
let firstName2 = 'Asabeneh'
let lastName2 = 'Yetayeh'
  var lngth2= (firstName2.length>lastName2.length)
  lngth2
  ? console.log(`Your first name, Asabeneh is longer than your family name, Yetayeh`)
  : console.log(`orez`)
 
//12
let myAge = 250
let yourAge = 25

let ageDiff= (myAge-yourAge)
 let old= (myAge>yourAge)
  old
  ? console.log(`I am ${ageDiff} years older than you`)
  : console.log(null)
  
//15

console.log(
  now.getFullYear()+'-'+now.getMonth()+'-'+now.getDay()+' '+now.getHours()+':'+now.getMinutes()
)

console.log(
  now.getDay()+'-'+now.getMonth()+'-'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes()
)

console.log(
  +now.getDay()+'/'+now.getMonth()+'/'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes()
)

//LEVEL 3

var month2 =now.getMonth()
  month2<10
   ? console.log('0'+month2)
   : console.log(month2)
 
 
  var day2 =now.getDay()
  day2<10
   ? console.log('0'+day2)
   : console.log(day2)
  

  var hour2 =now.getHours()
  hour2<10
   ? console.log('0'+hour2)
   : console.log(hour2)
   

  var min2 =now.getMinutes()
  min2<10
   ? console.log('0'+min2)
   : console.log(min2)
 

   

console.log(+'-'+month2+'-'+day2+' '+hour2+':'+min2)