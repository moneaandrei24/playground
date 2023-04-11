//Console Object Methods

//console.log
   //Showing output on browser console
   console.log('30 Days of JavaScript')
   //Substitution
   console.log('%d %s of JavaScript', 30, 'Days')
    //%d-decimal
    //%s-string
   
   //CSS
    //we can style the logging out put using %c.
    console.log('%c30 Days Of JavaScript', 'color:green') 
    console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'color:green',
    '',
    'color:red',
    '',
    'color:yellow'
    ) 

//console.warn()  
  //We use console.warn() to give warning on browser. 

  console.warn('This is a warning')
  console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
   )
   console.warn('Warning is different from error')

//console.error()
 //shows an error messages.
 console.error('This is an error message')
 console.error('mama este grasa')

//console.table()
//must be an array or an object
//Displays tabular data as a table. 

  //array
  //An index column to display the index and value column to display the names
  const names = ['Asabeneh', 'Brook', 'David', 'John']
  console.table(names)

  //object
  /* This creates table with two columns:an index column containing
   the keys and a value column contain the values of the object.
  */
  const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  console.table(user)
  
  const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  console.table(countries)
  
  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]
  console.table(users)

//console.time() 
  //Starts a timer you can use to track how long an operation takes.
  //You give each timer a unique name
  /*When you call console.timeEnd() with the same name,
   the browser will output the time, in milliseconds, 
   that elapsed since the timer was started.*/

   const countries2 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
  
  console.time('Regular for loop')
  for (let i = 0; i < countries2.length; i++) {
    console.log(countries2[i][0], countries2[i][1])
  }
  console.timeEnd('Regular for loop')
  
  console.time('for of loop')
  for (const [name, city] of countries2) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')
  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')

//console.info()  
  //It displays information message on browser console.
  console.info('30 Days Of JavaScript challenge is trending on Github')
  console.info('30 Days Of fullStack challenge might be released')
  console.info('30 Days Of HTML and CSS challenge might be released')


//console.assert()
  //writes an error message to the console if the assertion is false.
  //If the assertion is true, nothing happens.
  console.assert(4 > 3, '4 is greater than 3') // no result
  console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

  for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
  }
  
//console.group()
  //can help to group different log groups
  const names3 = ['Asabeneh', 'Brook', 'David', 'John']
  const countries3 = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
  ]
  const user3 = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
  const users3 = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

   console.group('Names')
   console.log(names3)
   console.groupEnd()

  console.group('Countries')
  console.log(countries3)
  console.groupEnd()

  console.group('Users')
  console.log(user3)
  console.log(users3)
  console.groupEnd()

//console.count()
  //It is very helpful to count the number of times a function is called.

  const func = () => {
    console.count('Function has been called')
  }
  func()
  func()
  func()

//console.clear() 
  //The console.clear() cleans the browser console.
 

