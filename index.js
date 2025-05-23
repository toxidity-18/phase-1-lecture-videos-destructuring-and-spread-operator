let arr = [1,2,3]
let arr2 = [...arr,4,5,6]
console.log(arr2) // [1, 2, 3, 4, 5, 6]  copying the original array and modifying the copied version 
let arr3 = [...arr2,'test',7,8]
console.log(arr3) // [1, 2, 3, 4, 5, 6, 'test', 7, 8]  copying the original array and modifying the copied version

// trying the spread operator with objects
let catObj = {
  name:'Rose'
}
let catObj2 = {
  ...catObj,age : 6
}
console.log(catObj2) // { name: 'Rose', age: 4 }  copying the original object and modifying the copied version

// destructuring of arrays and objects 
// ... spread operator help to copy the original array or object

// let catObj3 = {
//   ...catObj,name : 'Tom',...catObj2,age:4
// }
// console.log(catObj3)
// code ln 17 to 21c doesn't work at all

// Obj destructuring 
let (name,age) = catObj2
console.log(name) // Rose
console.log(age) // 6

catObj2.name
name // Rose 
catObj2.age
age // 6

// arr destructuring
let [num1,num2,num3,num4,num5,num6]=arr2
console.log.num6// 6
num6 // 6


let [color1,color2,color3]=['red','green','blue']
console.log(color1) // red
console.log(color2) // green
console.log(color3) // blue

