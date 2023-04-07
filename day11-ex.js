//Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
//1Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

const [e,pi,gravity,humanBodyTemp]=constants
console.log(e,pi,gravity,humanBodyTemp)

//2Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
let [fin,est,sw,den,nor]=countries

console.log(fin,est,sw,den,nor)
//3Destructure the rectangle object by its properties or keys.

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
let {width,height,area,perimeter}=rectangle
console.log(width,height,area,perimeter=100)
//LEVEL2
const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
  ]

  //1Iterate through the users array and get all the keys of the object using destructuring
  
  for(let {name,scores,skills,age}of users){
    console.log(name,scores,skills,age)
  }

  //2Find the persons who have less than two skills

  for(let {skills,name}of users){
    if(skills.length<2){
      console.log(name) 
    }
  }

  //Level3

  //1Destructure the countries object print name, capital, population and languages of all countries

  let countriesArr=[
    { country: 'China', population: 1377422166, capital: 'Beijing' },
    { country: 'India', population: 1295210000, capital: 'New Delhi' },
    {
      country: 'United States of America',
      population: 323947000,
      capital: 'Washington, D.C.'
    },
    { country: 'Indonesia', population: 258705000, capital: 'Jakarta' },
    { country: 'Brazil', population: 206135893, capital: 'Brasilia' },
    { country: 'Pakistan', population: 194125062, capital: 'Islamabad' },
    { country: 'Nigeria', population: 186988000, capital: 'Abuja' },
    { country: 'Bangladesh', population: 161006790, capital: 'Dacca' },
    { country: 'Russian Federation', population: 146599183, capital: 'Moscow' },
    { country: 'Japan', population: 126960000, capital: 'Tokyo' }
  ]

  for(let {country,population,capital}of countriesArr){

    console.log(country,population,capital)
  }

  //2
  /*A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
  Destructure the following array name to name, skills array to skills, scores array to scores,
  JavaScript score to jsScore and React score to reactScore variable in one line.*/

  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

  const [name,skills,[HTMscore,CSSscore,jsScore,reactScore]]=student

  console.log(name, skills, jsScore, reactScore)

  //3Write a function called convertArrayToObject which can convert the array to a structure object.

  const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]

  function  convertArrayToObject(arr){

   

      let obj= {}
 
      for(let [name1,skills1,scores1]of student){
        obj.name=name1
        obj.skills=skills1
        obj.scores=scores1
      }
       return obj
    }
   
  

  console.log(convertArrayToObject(students))//????