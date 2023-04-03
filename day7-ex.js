//LEVEL 1

//1
function fullName(){
  let firstName= 'Monea'
  let lastName= 'Andrei'
  let space=' '
  let fullName=firstName+space+lastName
  return fullName
}

console.log(fullName())

//2
function fullName2(firstName,lastName){
  let fullName=`${firstName} ${lastName}`
  return fullName
}
console.log(fullName2('Monea','Andrei'))

//3

function addNumbers(numOne,numTwo){
  let sum = numOne+numTwo
  return sum
}
 console.log(addNumbers(7,10))

 //4

 function areaOfRectangle(length,width){
  let areaRectangle= length * width
  return areaRectangle
 }
  console.log(areaOfRectangle(9,8))

  //5

  function perimeterOfRectangle(length,width){
    let perimeter= 2*(length+width)
    return perimeter
  }

  console.log(perimeterOfRectangle(3,4))

  //6

  function rectangularPrism(length,width,height){
    let volume= length*width*height
    return volume
  }

  console.log(rectangularPrism(5,5,10))

  //7

  function areaOfCircle(r){
    let PI=Math.PI
    let areaCircle=PI*(r**2)
    return areaCircle
  }

  console.log(areaOfCircle(5))

  //8

  function circumOfCircle(r){
    let circum=2*Math.PI*r
    return circum
  }
    console.log(circumOfCircle(5))

    //9

    function density(mass,volume){
      let density=mass/volume
      return density
    }
    console.log(density(13,4))

    //10
    function speed(distance,time){
      let velocity= distance/time
      return velocity
    }
    console.log(speed(10,10))

    //11
    function weight(mass){
      let g=mass*9.81
      return g
    }

    console.log(weight(80))


   //12
   function convertCelsiusToFaranheit(c){
    let convert= (c*9/5)+32
    return convert
   }

   console.log(convertCelsiusToFaranheit(5))

    //13

    function BMI(weight,height){
      let bmi=weight/(height**2)
      
      if(bmi<18.5){
        console.log('Underweight')
      }else if (18.5<bmi<24.9){
        console.log('Normal weight')
      }else if (25<bmi<29.9){
        console.log('Overweight')
      }else if (30<bmi){
        console.log('Obese')
      }
      
    }
 BMI(75,1.8)

 //14

 function checkSeason(season){

  switch(true){
    case season==='september'||season==='october'||season==='november':
    console.log('Autumn');
    break;
  
    case season==='december'||season==='january'||season==='february':
    console.log('Winter');
    break;
  
    case season==='march'||season==='april'||season==='may':
    console.log('Spring');
    break;
  
    case season==='june'||season==='july'||season==='august':
    console.log('Summer');
    break;
  
    default:
    console.log('Entered word is not a season')
  
  
 }

}
checkSeason('september')

//15

function findMax(a,b,c){
  let arr=[a,b,c]

  let biggest=0
  for(i=0;i<=arr.length;i++){
    if(arr[i]>biggest){
      biggest=arr[i]
    }
  }
  return biggest
}
 console.log(findMax(12,13,16))

 //LEVEL2

 //1//2

 //3
 function printArray(arr){
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
 }
 printArray([1,2,3,5,'vasile'])
 
 //4

 

 function showDateTime(){
  
  let now=new Date()
  let day= now.getDay()
  if(day<10){
    day='0'+day
  }
  let month= now.getMonth()
  if(month<10){
    month='0'+month
  }
  let year= now.getFullYear()
  
  let hour= now.getHours()
  if(hour<10){
    hour='0'+hour
  }
  let minutes= now.getMinutes()
  if(minutes<10){
    minutes='0'+minutes
  }

  console.log(day+'/'+month+'/'+year+' '+hour+':'+minutes)

 }

 showDateTime()

 //5

 function swapValues(a,b){
  let x=a
  if(x=a){
    console.log('x='+b)
  }
  let y=b
  if(y=b){
    console.log('y='+a)
  }
 }
swapValues(5,7)

//6
function reverseArray(arr){
  newArr=[]
  for(let i=arr.length-1 ;i>=0;i--){
    newArr.push(arr[i])
  }
  return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

//7

function capitalizeArray(arr){
  newArr=[]
  for(let i=0;i<arr.length;i++){
    newArr.push(arr[i].toUpperCase())
  }
  return newArr
}
console.log(capitalizeArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

//8
function addItem(item){
  newArr=['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']
  newArr.push(item)
  return newArr
}
console.log(addItem('orez'))
console.log(addItem(9))

//9
function removeItem(index){
  newArr=['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']
  newArr.splice(index,1)
  return newArr

}
console.log(removeItem(1))

//10
function sumOfNumbers(...numbs){
  let n=0
  for(let i=0;i<numbs.length;i++){
    n=n+numbs[i]
  }
  return n
}
console.log(sumOfNumbers(1,3,34))

//11
function sumOfOdds(...numbs){
  let n=0
  for(let i=0;i<numbs.length;i++){
    
    if(numbs[i]%2!=0){
      n=n+numbs[i]
    }
  }
  return n
}
console.log(sumOfOdds(3,3,3,5,6,8,10))

//12

function sumOfEven(...numbs){
  let n=0
  for(let i=0;i<numbs.length;i++){
    
    if(numbs[i]%2===0){
      n=n+numbs[i]
    }
  }
  return n
}
console.log(sumOfEven(3,3,3,5,6,8,10))

//13

function evensAndOdds(numb){
  if(numb%2===0){
    console.log(`The number of odds are ${Math.floor(numb/2)}`)
    console.log(`The number of evens are ${Math.floor(numb/2)+1}`)

  }else {
    console.log(`The number of odds are ${Math.floor(numb/2)+1}`)
    console.log(`The number of evens are ${Math.floor(numb/2)+1}`)
  }
}

evensAndOdds(103)

//14

function sum(...numbs){
  let n=0
  for(let i=0;i<numbs.length;i++){
    n=n+numbs[i]
  }
  console.log(n)
}
sum(1, 2, 3) 
sum(1, 2, 3, 4) 

//15

function randomUserIp(){
  let n1= Math. floor(Math. random() * 255 + 1)
  let n2= Math. floor(Math. random() * 255 + 1)
  let n3= Math. floor(Math. random() * 255 + 1)
  let n4= Math. floor(Math. random() * 255 + 1)
  let randomIp=n1+'.'+n2+'.'+n3+'.'+n4
  return randomIp
}
console.log(randomUserIp())

//16

function rma(){
  
  let letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  let p=0
  let n=Math.round(Math. random())
  if(n===1){
   p=letters[Math. floor(Math. random() * letters.length )]
  }else {
   p=Math. floor(Math. random() * 10)
  }
  
  
return p

}
function randomMacAddress(){
 let final=(rma()+rma()+'-'+rma()+rma()+'-'+rma()+rma()+'-'+rma()+rma()+'-'+rma()+rma()+'-'+rma()+rma())
 return final
}

console.log(randomMacAddress())




//17

function  randomHexaNumberGenerator(){
  let hexa=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f']
  let n1=hexa[Math. floor(Math. random() * hexa.length )]
  let n2=hexa[Math. floor(Math. random() * hexa.length )]
  let n3=hexa[Math. floor(Math. random() * hexa.length )]
  let n4=hexa[Math. floor(Math. random() * hexa.length )]
  let n5=hexa[Math. floor(Math. random() * hexa.length )]
  let n6=hexa[Math. floor(Math. random() * hexa.length )]

  let final='#'+n1+n2+n3+n4+n5+n6
  return final
}

console.log(randomHexaNumberGenerator())

//18

function userIdGenerator(){

  let numb=[0,1,2,3,4,5,6,7,8,9]
  let letter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let letterBig=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  let bigArray=numb.concat(letter.concat(letterBig))
  let n1=bigArray[Math. floor(Math. random() * bigArray.length )]
  let n2=bigArray[Math. floor(Math. random() * bigArray.length )]
  let n3=bigArray[Math. floor(Math. random() * bigArray.length )]
  let n4=bigArray[Math. floor(Math. random() * bigArray.length )]
  let n5=bigArray[Math. floor(Math. random() * bigArray.length )]
  let n6=bigArray[Math. floor(Math. random() * bigArray.length )]
  let n7=bigArray[Math. floor(Math. random() * bigArray.length )]

  let final=n1+n2+n3+n4+n5+n6+n7

  return final

}


console.log(userIdGenerator())


//LEVEL3

//1????

//2
function rgbColorGenerator(){
  let n1= Math. floor(Math. random() * 255 + 1)
  let n2= Math. floor(Math. random() * 255 + 1)
  let n3= Math. floor(Math. random() * 255 + 1)

  let final= `rgb(${n1},${n2},${n3})`
  console.log(final)
}
rgbColorGenerator()

//3

function arrayOfHexaColors(numb){

  let arr=[]
  for(let i=0;i<numb;i++){
    arr.push(randomHexaNumberGenerator())
  }
  return arr
}
 
console.log(arrayOfHexaColors(4))

//4

function rgbColorGenerator2(){
  let n1= Math. floor(Math. random() * 255 + 1)
  let n2= Math. floor(Math. random() * 255 + 1)
  let n3= Math. floor(Math. random() * 255 + 1)

  let final= `rgb(${n1},${n2},${n3})`
  return final
}


function arrayOfRgbColors(numb){

  let arr=[]
  for(let i=0;i<numb;i++){
    arr.push(rgbColorGenerator2())
  }
  return arr
}
console.log(arrayOfRgbColors(4))

//5

function convertHexaToRgb(hex){

  var rgb =hex.match(/.{1,2}/g)
  var rgb1=parseInt(rgb[0],16)
  var rgb2=parseInt(rgb[1],16)
  var rgb3=parseInt(rgb[2],16)

  final= `rgb(${rgb1},${rgb2},${rgb3})`
 return final

}
console.log(convertHexaToRgb('9af9fa'))

//6

function convertRgbToHexa(a,b,c){
  
  
  
  
  const hexadecimal = a.toString(16); 
  if(hexadecimal.length == 1) {}
    
    let n1=hexadecimal

    const hexadecimal2= b.toString(16); 
  if(hexadecimal.length == 1) {}
    
    let n2=hexadecimal2

    const hexadecimal3 = c.toString(16); 
  if(hexadecimal.length == 1) {}
    
    let n3=hexadecimal3

  let final='#'+n1+n2+n3
  return final
 

}

console.log(convertRgbToHexa(255,55,44))

//7

function generateColors(a,b){
  let arr=[]
  
  if(a==='hexa'){
    for(let i=0;i<b;i++){
      arr.push(randomHexaNumberGenerator())
    }
   }else if(a==='rgb'){

    for(let i=0;i<b;i++){
      arr.push(rgbColorGenerator2())
    }
   }

   return arr
}

console.log(generateColors('rgb',8))

//8??????

//9

function factorial(a){
  let n=1
  for(let i=1;i<=a;i++){
  n=n*i
 }

 return n
}
 
console.log(factorial(5))

//10

function isEmpty(a){
  let b
  if(a===undefined){
    b= 'Parameter is empty'
  }else{
    b='Parameter is not empty'
  }
  return b
 
}

console.log(isEmpty())

//11

function sumOfNumbers3(...numbs){
  let n=0
  for(let i=0;i<numbs.length;i++){
    n=n+numbs[i]
  }
  return n
}
console.log(sumOfNumbers3(1,3,34))

//12

function sumOfArrayItems([...numbs]){

  let n=0
  for(let i=0;i<numbs.length;i++){
    n=n+numbs[i]
  }
  let final
  if(typeof n==='number'){
   final=n
  }else{
    final='input is not number'

  }
  return final
  
}
console.log(sumOfArrayItems([4,4,78]))

//13

function avarage([...numbs]){
  let n=0
  for(let i=0;i<numbs.length;i++){
    n=n+numbs[i]
  }
  if(typeof n==='number'){
    final=n/numbs.length
   }else{
     final='input is not number'
 
   }
   return final

}

console.log(avarage([1,3,4]))

//14

function modifyArray([...input]){
  let a
  let b
  if(input.length>=5){
    a=input[4].toUpperCase()
    input.splice(4,1,a)
    b=input
  }else{
    b='not found'
  }
  
  return b
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))

//15???

//16???

//17???

//19

function sevenRandomNumbers(){
  arr=[]
  for(let i=0;i<7;i++){
  let random=Math. floor(Math. random() * 10 )
  if(arr.indexOf(random)===-1){
    arr.push(random)
  }
  }
  return arr
}

console.log(sevenRandomNumbers())//???

//20

 function reverseCountryes([...input]){
  let rev=[]
  for(let i=input.length-1;i>=0;i--){
  rev.push(input[i])
  
 }
 return rev
}
  console.log(reverseCountryes(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']))


