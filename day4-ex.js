//LEVEL1
//1
let age = prompt('Enter your age')

if (age<18){
  console.log('You are left with '+(18-age)+' years to drive.')
} else if(age>18){
  console.log('You are old enough to drive.')
}

//2
let myAge=20
let yourAge= prompt('Enter your age')
if (myAge<yourAge){
  console.log(`You are ${(yourAge-myAge)} years older than me.`)
}else if(myAge>yourAge){
  console.log(`I am ${myAge-yourAge} years older than you` )
}

//3
let a = 4
let b = 3
if(a>b){
  console.log('a is grater than b')
}else {
  console.log('a is less than b')
}

a>b
 ? console.log('a is grater than b')
 : console.log('a is less than b')

//4 
let m=prompt('Enter a number:')
if(m%2==0){
  console.log(`${m} is an even number`)
}else{
  console.log(`${m} is an odd number`)
}

//LEVEL2

//1
let grade=prompt('Enter grade')
if(80<=grade&&grade<=100){
  console.log('A')
}if(70<=grade&&grade<=89){
  console.log('B')
}if(60<=grade&&grade<=69){
  console.log('C')
}if(50<=grade&&grade<=59){
  console.log('D')
}if(0<=grade&&grade<=49){
  console.log('F')
}

//2
let season=prompt('Enter season').toLowerCase()
switch(true){
  case season==='september'||season==='october'||season==='november':
  console.log('the season is Autumn');
  break;

  case season==='december'||season==='january'||season==='february':
  console.log('the season is Winter');
  break;

  case season==='march'||season==='april'||season==='may':
  console.log('the season is Spring');
  break;

  case season==='june'||season==='july'||season==='august':
  console.log('the season is Summer');
  break;

  default:
  console.log('Entered word is not a season')


}

//3

let day3=prompt('What is the day today?').toLowerCase()
switch(true){
  case day3==='monday'||day3==='tuesday'||day3==='wednesday'||
  day3==='thursday'||day3==='friday':
  console.log(`${day3} is a working day.`);
  break;

  case day3==='saturday'||day3==='sunday':
  console.log(`${day3} is a weekend.`);
  break;

  default:
  console.log('Entered word is not a day')  

  
}

//LEVEL 3

//1;//2
let month3=prompt('Enter a month:').toLowerCase()
switch(true){
  case month3==='january':
  console.log(`January has 31 days.`);
  break;

  case month3==='february':
  if(new Date().getFullYear()%4==0){
    console.log('February has 29 days')
  } else {
    console.log('February has 28 days')
  }
  break;

  case month3==='march':
  console.log(`March has 31 days.`);
  break;

  case month3==='april':
  console.log(`April has 30 days.`);
  break;

  case month3==='may':
  console.log(`May has 31 days.`);
  break;

  case month3==='june':
  console.log(`June has 30 days.`);
  break;

  case month3==='july':
  console.log(`July has 31 days.`);
  break;

  case month3==='august':
  console.log(`Aaugust has 31 days.`);
  break;

  case month3==='september':
  console.log(`September has 30 days.`);
  break;

  case month3==='october':
  console.log(`${month3} has 31 days.`);
  break;

  case month3==='november':
  console.log(`November has 30 days.`);
  break;

  case month3==='december':
  console.log(`December has 31 days.`);
  break;

  default:
  console.log('Entered word is not a month')  
}








