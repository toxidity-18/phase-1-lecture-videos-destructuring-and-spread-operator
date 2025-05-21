let arr = [1,2,3]
let arr2 = [...arr,4,5,6]
console.log(arr2) // [1, 2, 3, 4, 5, 6]  copying the original array and modifying the copied version 

// trying the spread operator with objects
let catObj = {
  name:'Rose'
}
let catObj2 = {
  ...catObj.age = 4 
}
console.log(catObj2) // { name: 'Rose', age: 4 }  copying the original object and modifying the copied version