var a = 11;
var b = 5;
var c = 78;

a-=6;
console.log(a);
b-=8;

console.log(b);
c-=67;
console.log(c);

let h=[0,1,3,4,5]
let j=[3,5,6,4]

console.log(h.push(j))

function addItem(item){
  newArr=['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']
  newArr.push(item)
  return newArr
}
console.log(addItem('orez'))
console.log(addItem(9))


newArr=['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']
let n=newArr.push('orez')

console.log(n)