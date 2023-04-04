//LEVEL 1

//1 Create an empty object called dog

const dog={}
//2 Print the the dog object on the console
console.log(dog)

/*3,4 Add name, legs, color, age and bark properties for the dog object.
 The bark property is a method which return woof woof

 Get name, legs, color, age and bark value from the dog object*/

dog.name ='Azorel'
dog.legs=4
dog.age=3
 function dogsound(){
  return 'woof woof'
 }
 dog.bark=dogsound()
 console.log(dog)

 //5 Set new properties the dog object: breed, getDogInfo
 
dog.breed=function(){
  return 'bulldog'
}


  dog.getDogInfo= function(){
  return `${this.name}\n${this.legs}\n${this.age}\n${this.bark}`
 }

 console.log(dog.getDogInfo())
 console.log(dog.breed())

 //LEVEL2
 const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//1Find the person who has many skills in the users object.





//2Count logged in users, count users having greater than equal to 50 points from the following object.


let a=Object.values(users).filter(user=>user.isLoggedIn).length
console.log(a)
let b=Object.values(users).filter(user=>user.points>=50).length
console.log(b)

//3 Find people who are MERN stack developer from the users object




for(user in users)
{
 const skills = users[user].skills
 if (skills.includes('MongoDB', 'Express', 'React', 'Node')){
    console.log(`${user} have MERN STACK`)
}
}

//4 Set your name in the users object without modifying the original users object

let usersCopy= Object.assign({},users)
usersCopy.MoneaAndrei={}
console.log(usersCopy)

//5 Get all keys or properties of users object

console.log(Object.keys(users))

//6 Get all the values of users object

console.log(Object.values(users))

//7 Use the countries object to print a country name, capital, populations and languages.

let country={}

country.name='Romania'
country.capital='Bucuresti'
country.populations=21+' mil'
country.languages='Romanian'

console.log(country)

country.countryInfo= function(){
  return `The name is ${this.name}.\nThe capital is ${this.capital}.\nThere are around ${this.populations} Romanians which speak ${this.languages}`
}
console.log(country.countryInfo())

//LEVEL3

/*1
Create an object literal called personAccount.
 It has firstName, lastName, incomes, expenses properties and it has totalIncome, 
 totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
  Incomes is a set of incomes and its description and expenses is a set of incomes and its description.*/

  const users2 = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//2 
/*Imagine you are getting the above users collection from a MongoDB database.
a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application*/


function signIn(){  


  function password(){
  let password=prompt('Create a password (6 characters of numbers)')
  if (password.length<6){
    alert('Your password is to short.Try again')
  password=false
  }else if(password.length===6){
       password
  }else if (password.length>6){
   
    password=false
     alert('Your password is to long.Try again')
  }
  function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
  }
  if (containsOnlyNumbers(password)===true){
     password
  }else {
    password=false
    alert('Your password can contain only numbers.Try again')
  }
  return password
}

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

    if(hour>=12){
       date=(day+'/'+month+'/'+year+' '+(hour-12)+':'+minutes+' PM')
    
    }else{
      date=(day+'/'+month+'/'+year+' '+hour+':'+minutes+' AM')
    }

   
    return date
  
  }
  
   

   function  randomId(){
    let Id=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let n1=Id[Math. floor(Math. random() * Id.length )]
    let n2=Id[Math. floor(Math. random() * Id.length )]
    let n3=Id[Math. floor(Math. random() * Id.length )]
    let n4=Id[Math. floor(Math. random() * Id.length )]
    let n5=Id[Math. floor(Math. random() * Id.length )]
    let n6=Id[Math. floor(Math. random() * Id.length )]
  
    let final=n1+n2+n3+n4+n5+n6
    return final
  }


  
    let username = prompt('Enter your name')
    let email=prompt('Enter your email adress')

    let newAcc={_id: randomId(),
    username: username,
    email: email,
    password: password(),
    createdAt:showDateTime(),
    isLoggedIn: true}
    
      
   if(password()===false){
    users2
   }else{
    users2.push(newAcc) 
   }
    

  
    
   
    
    return users2
}
 console.log(signIn())

 
 


