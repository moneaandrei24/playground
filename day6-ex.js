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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//1

for(let i=0;i<=10;i++){
  console.log(i)
}

let p=0
while (p<=10){
  console.log(p)
  p++
}

let m=0
do{
  console.log(m)
  m++
} while (m<=10)

//2

for(let n=10;n>=0;n--){
  console.log(n)
}

let b=10
while (b>=0){
  console.log(b)
  b--
}

let h=10
do{
  console.log(h)
  h--
} while (h>=0)



//3
let n=34
for(let l=0;l<=n;l++){
  console.log(l)
}


//4
for(let i=0;i<=7;i++){
  console.log('#'.repeat(i))
}

//5
for(let i=0;i<=10;i++){
  console.log(i+'x'+i+'='+i**2)
}

//6
for(let i=0;i<=10;i++){
  console.log(i+'   '+i**2+'   '+i**3)
}

//7
for(let i=0;i<=100;i++){
  if(i%2==0){
    console.log(i)
  }
}

//8

for(let i=0;i<=100;i++){
  if(i%2!=0){
    console.log(i)
  }
}
//9

let prime=0
for(let j=2 ;j<=100; j++){
  for (let i=1;i<=j;i++){
    if(j%i==0)
    prime++
  }
  if(prime==2)

  console.log(j)
  prime=0
}  //??????????????

//10
let sum=0
for(let i=1;i<=100;i++){
  sum=sum+i
}
console.log(sum)

//11
let sum2=0
for(let i=0;i<=100;i++){
  if(i%2==0){
    sum2=sum2+i
  }
}

let sum3=0
for(let i=0;i<=100;i++){
  if(i%2!=0){
    sum3=sum3+i
  }
}

console.log(`The sum of all evens from 0 to 100 is ${sum2}. And the sum of all odds from 0 to 100 is ${sum3}.`)

//12

const arr12= Array(sum2,sum3)
console.log(arr12)

//13

let arr13=[]
for(let i=0;i<=5;i++){
  arr13.push(Math.floor(Math.random()*50))
}
console.log(arr13)

//14
let arr14=[]
for(let i=0;i<=5;i++){
  let r=(Math.floor(Math.random()*50))
  if(arr14.indexOf(r)===-1){
    arr14.push(r)
  }
}
console.log(arr14)

//15
//?????

//LEVEL2

//1?
//2?
//3?

//4

const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

//5

const newArr2 = []
for(let i = 0; i < countries.length; i++){
  newArr2.push(countries[i].length)
}
console.log(newArr2)

//6

arr6=[]
for(let i = 0; i < countries.length; i++){
 let arr7=[]
  let e1=countries[i].toUpperCase()
  let e2=countries[i].slice(0,3).toUpperCase()
  let e3=countries[i].length
arr7=[e1,e2,e3]
arr6.push(arr7)
}
console.log(arr6)

//7

arr8=[]
for(let i = 0; i < countries.length; i++){
  if(countries[i].includes('land')===true){
    arr8.push(countries[i])
  }
  else{
    'All these countries are without land.'
  }
}
console.log(arr8)

//8

countries2= []
arr9=[]
for(let i = 0; i < countries.length; i++){
  if(countries[i].slice(-2)==='ia'){
    arr9.push(countries[i])
  }
}

if (arr9.length>0){
  console.log(arr9)
} else{
  console.log('These are countries ends without ia')
}

//9

let lght=0;
let longest=0;
for(let i=0;i < countries.length; i++){
  if(countries[i].length>lght){
    lght=countries[i].length
    longest=countries[i]
  }
}
console.log(longest)

//10
arr10=[]
for(let i=0;i < countries.length; i++){
  if(countries[i].length===5){
    arr10.push(countries[i])

  }
}
console.log(arr10)

//11

let lght2=0;
let longest2=0;
for(let i=0;i <webTechs.length; i++){
  if(webTechs[i].length>lght){
    lght2=webTechs[i].length
    longest2=webTechs[i]
  }
}
console.log(longest2)

//12

arr11=[]
for(let i = 0; i < webTechs.length; i++){
 let arr12=[]
  let el1=webTechs[i].toUpperCase()
  let el2=webTechs[i].length
arr12=[el1,el2]
arr11.push(arr12)
}
console.log(arr11)

//13?????

//14
const webTechs2 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const cur of webTechs2) {
  console.log(cur.toUpperCase())
}

//15
let fruit=['banana', 'orange', 'mango', 'lemon'] 
var newArray3 = [];
  for (var i = fruit.length - 1; i >= 0; i--) {
    newArray3.push(fruit[i]);
  }
  console.log(newArray3)

//16??????

//LEVEL3
const countries5 = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]
//1
const countries4 = [
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
//2
let sortedCountries=countries4.sort()
console.log(sortedCountries)

//3
console.log(webTechs.sort())

//4
array=[]
for(let i = 0; i < countries5.length; i++){
  if(countries5[i].includes('land')===true){
    array.push(countries5[i])
  }
}
  console.log(array)

//5

let lght3=0;
let longest3=0;
for(let i=0;i < countries5.length; i++){
  if(countries5[i].length>lght3){
    lght3=countries5[i].length
    longest3=countries5[i]
  }
}
console.log(longest3)

//6=//4

//7
array2=[]
for(let i=0;i < countries5.length; i++){
  if(countries5[i].length<=4){
    array2.push(countries5[i])
  }
}
console.log(array2)

//8
array3=[]
for(let i = 0; i < countries5.length; i++){
  if(countries5[i].includes(' ')===true){
    array3.push(countries5[i])
  }
}
  console.log(array3)

//9
var newArray4 = [];
  for (var i = countries5.length - 1; i >= 0; i--) {
   let array5=[]
    let b=countries5[i].toUpperCase()
    array5=[b]
    newArray4.push(array5)
  }
  console.log(newArray4)

//10