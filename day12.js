//Regular Expresions
 //parameter+ (obtional)flag
//PARAMETERS

/*PATTERN
  -could be a text or any form of pattern which some sort of similarity.
  
 FLAGS
  -It determines the type of searching

  1. g: could be a text or any form of pattern which some sort of similarity.
  2. i:(it searches for both lowercase and uppercase)
  3. m:multiline
  */

//Creating a pattern with RegExp Constructor

   // without flag
let pattern = 'love'
let regEx = new RegExp(pattern)
 
   // with flag
  let pattern2 = 'love'
let flag2 = 'gi'
let regEx2 = new RegExp(pattern2, flag2)
console.log(regEx2)

   //Writing the pattern and the flag inside the RegExp constructor

  let regEx3 = new RegExp('love','gi')

//Creating a pattern without RegExp Constructor

let regEx4= /love/gi // = let regEx= new RegExp('love','gi')


//RegExpp Object Methods

  //test():Tests for a match in a string. It returns true or false.
  const str = 'I love JavaScript'
  const pattern5 = /love/
  const result = pattern5.test(str)
  console.log(result)
 
  /*match():Returns an array containing all of the matches, including capturing groups,
   or null if no match is found. If we do not use a global flag,
   match() returns an array containing the pattern, index, input and group.
*/

   const str6 = 'I love JavaScript'
   const pattern6 = /love/
   const result6 = str.match(pattern6)
   console.log(result6)
    // without g(/love/)
    //["love", index: 2, input: "I love JavaScript", groups: undefined]
    // with g(/love/g)
    //["love"]
    const str7 = 'I love JavaScript'
    const pattern7 = /love/g
    const result7 = str.match(pattern7)
    console.log(result7)

    //search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.

    const str8 = 'I love JavaScript'
    const pattern8 = /love/g
    const result8 = str.search(pattern8)
    console.log(result8)

    //replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

    const txt = 'Python is the most beautiful language that a human begin has ever created.\
    I recommend python for a first programming language'

    matchReplaced = txt.replace(/Python|python/, 'JavaScript')
    console.log(matchReplaced)
  
    // /Python|python/- it replaces the first word found in text
    // /Python|python/g- it replaces all words found in text
    
    const txt2 = 'Python 44444555is the most beautiful language that a human begin has ever created.\
    I recommend python for a first programming language'

    matchReplaced2 = txt2.replace(/Python|python/g, 'JavaScript')
    console.log(matchReplaced2)

  
//[]: A set of characters
  /*[a-c] means, a or b or c
    [a-z] means, any letter a to z
    [A-Z] means, any character A to Z
    [0-3] means, 0 or 1 or 2 or 3
    [0-9] means any number 0 to 9
    [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
  
  \: uses to escape special characters

    \d mean: match where the string contains digits (numbers from 0-9)
    \D mean: match where the string does not contain digits

    
    */
    
