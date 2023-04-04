// For loop structure

/*
for(initialization, condition, increment/decrement){
  // code goes here
}*/

//example
for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5

/*
let i=0 - starting point
i>=5    - condition (ending point)
(i++)=(i+=1)=(i=i+1)-value of i goes up or down 
(i++) -up
(i--)-down
*/

/* for i++ the value of i is incremented by 1
  if we want the value to be incremented by 2 or 3 or other 
    we use i+=2 ; i+=4 ; ..... ; i +=390 ;... etc
    */
  
    const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
    const newArr = []
    for(let i = 0; i < countries.length; i++){
      newArr.push(countries[i].toUpperCase())
    }
    console.log(newArr)
    // ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

    //ADDING ELEMENTS TO AN ARRAY
    const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}

console.log(sum)  


//Creating a new array based on the existing array

const numbers2 = [1, 2, 3, 4, 5]
const newArr2 = []
let sum2 = 0
for(let i = 0; i < numbers.length; i++){
  newArr2.push( numbers2[i] ** 2)

}

console.log(newArr2)  // [1, 4, 9, 16, 25]

