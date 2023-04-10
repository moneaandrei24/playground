//LEVEL1

//1
/*Calculate the total annual income of the person from the following text.
 ‘He earns 4000 euro from salary per month, 10000 euro annual bonus,
  5500 euro online courses per month.’*/

  let text='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
  let pattern= /\d+/g
  let income=text.match(pattern)
  let total=(parseInt(income[0])+parseInt(income[2]))*12+parseInt(income[1])
  console.log(total)

  //2
  /*The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 
  0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
  */

  let points=['-12', '2', '-4', '-3', '-1', '0', '4', '8']
  
  let numbPoints= points.map(element=>parseInt(element))
   
  let sortedPoints=
  numbPoints.sort(function (a, b) {
    return a - b
  })
  console.log(sortedPoints)
 
 let distance=sortedPoints[points.length-1]-sortedPoints[0]
 console.log(distance)//???? nu am folosit nimic din lectia asta

 //3Write a pattern which identify if a string is a valid JavaScript variable

//???

//LEVEL 3
//1Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(str){}

  let words = paragraph.match(/\w+/g);
  console.log(words)

  let countWords={}
  for (let word of words) {
    if (countWords[word]) {
      countWords[word]++;
    } else {
      countWords[word] = 1;
    }
  }
  console.log(countWords)



 