//level 1
var challange="30 Days Of JavaScript"
console.log(challange)
console.log(challange.length)
console.log(challange.toUpperCase())
console.log(challange.toLowerCase())
console.log(challange.substring(0,2),challange.substring(8,99))
console.log(challange.substring(0,2))
console.log(challange.includes('Script'))
console.log(challange.split())
console.log(challange.split(' '))
var ex11='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
console.log(ex11.split(', '))
console.log(challange.replace('JavaScript','Python'))
console.log(challange.charAt(15))
console.log(challange.charCodeAt('J'))
console.log(challange.indexOf('a'))
console.log(challange.lastIndexOf('a'))
var ex18='You cannot end a sentence with because because because is a conjunction'
console.log(ex18.indexOf('because'))
console.log(ex18.lastIndexOf('because'))
console.log(ex18.search('because'))
var challange2=' 30 Days Of JavaScript '
console.log(challange2.trim(''))
console.log(challange.startsWith(30))
console.log(challange.endsWith('cript'))
console.log(challange.match(/a/gi))
var ex241='30 Days of ' 
var ex242='JavaScript'
console.log(ex241.concat(ex242))
console.log(challange.repeat(2))

//level 2

var ex1 ='There is no exercise better for the heart than reaching down and lifting people up.'

console.log(`The quote \'${ex1}\' by John Holmes teaches us to help one another.`)

var ex2='Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.'

console.log(`\"${ex2}\"`)

console.log(typeof 10)
//ex3
var num1 ='10'
var num2= 10
 console.log(num1==num2)


var num3=parseFloat(9.81)
var num4=10
console.log(num3==num4)
var num5=Math.ceil(num3)
console.log(num4==num5)

 //5
 var pyt='python'
 var jar='jargon'
 console.log(pyt.includes('on'))
 console.log(jar.includes('on'))

 //6
 var sentence='I hope this course is not full of jargon.'
 console.log(sentence.includes('jargon'))

 //7

 var randomNum = Math.floor(Math.random()*101)
 
console.log(randomNum)

//8

var randomNum2 = Math.floor(Math.random()*51+50)
console.log(randomNum2)

//9

var randomNum3 = Math.floor(Math.random()*251)
 
console.log(randomNum3)

//10
var string2='JavaScript'
var randomNum = Math.floor(Math.random()*11-1)
var stringCh= string2[randomNum] 

console.log(stringCh)

//11 
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125 ')

//12
var sentence3='You cannot end a sentence with because because because is a conjunction'
var because2='because because because'
var firstIndex= sentence3.indexOf('because')
var lastIndex= sentence3.lastIndexOf('is')


console.log(sentence3.substr(0,firstIndex-1),sentence3.substr(lastIndex,900))

//level 3
//1
var love2='Love is the best thing in this world. Some found their love and some are still looking for their love.'
var manyLove = love2.match(/love/gi)
console.log(manyLove)


//2
var becauseCount= sentence3.match(/because/gi)
console.log(becauseCount)
//3

var sentence5 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
var clean=sentence5.replace(/[@$&%#;]/g,'')
console.log(clean)
var wordfrq=clean.split(' ')
console.log(wordfrq)
//?

//4
var earnings='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
var numbers=earnings.match(/\d+/g)
var total= (+numbers[0]*12)+(+numbers[1])+(+numbers[2]*12)
console.log(total)
//??