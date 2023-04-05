//LEVEL1

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



//1 Explain the difference between forEach, map, filter, and reduce.
/*

forEach: it loops through an array and acces every element
map: it loops through the array and can modify its elements
filter: it loops through the array and return only the elements that full fill
        the conditions
reduce: it s a loop that acumulates one value through the array.
*/

//2Define a callback function before you use it in forEach, map, filter or reduce.
//???
//3 Use forEach to console.log each country in the countries array.

 countries.forEach(country=>console.log(country))

 //4Use forEach to console.log each name in the names array.

names.forEach(name=>console.log(name))

//5Use forEach to console.log each number in the numbers array.

numbers.forEach(num=>console.log(num))

//6Use map to create a new array by changing each country to uppercase in the countries array.

let countriesToUpperCase=countries.map((country)=>(country).toUpperCase())
console.log(countriesToUpperCase)

//7Use map to create an array of countries length from countries array.
let countriesLength=countries.map((country)=>(country).length)
console.log(countriesLength)

//8Use map to create a new array by changing each number to square in the numbers array

let numberSquare= numbers.map((num)=>(num)**2)
console.log(numberSquare)

//9Use map to change to each name to uppercase in the names array


function changeArrToUpperCase(arr){

  return arr.map((element)=>element.toUpperCase())
}
console.log(changeArrToUpperCase(names))

//10Use map to map the products array to its corresponding prices.
//???
//11Use filter to filter out countries containing land.

function containsLand(arr){
  
  return arr.filter((element)=>(element).includes('land'))
  
}
console.log(containsLand(countries))

//12 Use filter to filter out countries having six character.
function sixCharacters(arr){

  return arr.filter((element)=>(element).length===6)
}
console.log(sixCharacters(countries))

//13Use filter to filter out countries containing six letters and more in the country array.

function sixCharactersAndMore(arr){

  return arr.filter((element)=>(element).length>=6)
}
console.log(sixCharactersAndMore(countries))

//14Use filter to filter out country start with 'F'

function beginsWithE(arr){

  return arr.filter((element)=>element[0]==='F')
}
console.log(beginsWithE(countries))

//15Use filter to filter out only prices with values.

function onlyPrices(arr){
  return arr.filter((element)=>typeof element.price==='number')
}
console.log(onlyPrices(products))

//16Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.


const countries2 = [1,2,3,true,'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']


function getStringLists(arr){

  return arr.filter(element=>typeof element==='string')
}
console.log(getStringLists(countries2))

//17 Use reduce to sum all the numbers in the numbers array.

console.log(numbers.reduce( (acc, cur) => acc + cur ))

/*18 Use reduce to concatenate all the countries and to produce this sentence:
 Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
 */

 console.log(countries.reduce( (acc, cur) => acc +','+ cur )+" are north European countries")
//???

//19Explain the difference between some and every
// some checks if some elements satisfy the condition and every checks if every element satisfy the condition

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook',4]

const areAllStr = names2.some((name) => typeof name === 'number') 
console.log(areAllStr) //there is one true value so it returns true

const areAllStr2 = names2.every((name) => typeof name === 'number') 
console.log(areAllStr2) //there is at least one falsy value so it returns false

//20Use some to check if some names' length greater than seven in names array

console.log(names.some((name)=>name.length>7))

//21Use every to check if all the countries contain the word land

console.log(countries.every(country=>country.includes('land')))

//22Explain the difference between find and findIndex.
//find returns the element which satisfies the condition and findIndex returns the index of the element that satidfies the condition

const names4 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']


const result = names4.findIndex((name) => name.length > 7)
console.log(result) // 0- index 

const result2 = names4.find((name) => name.length > 7)
console.log(result2) // Asabeneh -element

//23Use find to find the first country containing only six letters in the countries array

console.log(countries.find(country=>country.length===6))

//24 Use findIndex to find the position of the first country containing only six letters in the countries array

console.log(countries.findIndex(country=>country.length===6))

//25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(country=>country==='Norway'))

//26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

console.log(countries.findIndex(country=>country==='Russia'))

//LEVEL2

//1Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

let withPrice=products.filter((element)=>typeof element.price==='number')
let values=withPrice.map(product=>product.price)
let total=values.reduce((acc,cur)=> acc + cur)
console.log(total)

//2Find the sum of price of products using only reduce reduce(callback))
let total2=withPrice.reduce(function(a,b){
  return {price: a.price+b.price }
})
console.log(total2)

//3Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

function categorizeCountries(arr){
 
  
    console.log( arr.filter((element)=>(element).includes('land')))
    console.log( arr.filter((element)=>(element).includes('ia')))
    console.log( arr.filter((element)=>(element).includes('island')))
    console.log( arr.filter((element)=>(element).includes('stan')))
   
  
}

//4Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
//??

//5Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

function getFirstTenCountries(arr){

  return arr.filter(element => arr.indexOf(element)<10)
}

console.log(getFirstTenCountries(countryList))

//6Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

function getLastTenCountries(arr){

  return arr.filter(element=> arr.indexOf(element)>(arr.length-11))
}
console.log(getLastTenCountries(countryList))

//7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

function whichLetter(arr){

  let letters=arr.map((country) => country.slice(0, 1))

  var mf = 1;
  var m = 0;
  var item;
  for (var i=0; i<letters.length; i++)
  {
          for (var j=i; j<letters.length; j++)
          {
                  if (letters[i] ==letters[j])
                   m++;
                  if (mf<m)
                  {
                    mf=m; 
                    item = letters[i];
                  }
          }
          m=0;
  }
  return item
   
}
 console.log(whichLetter(countryList))
