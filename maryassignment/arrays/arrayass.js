// const myBoys = ["Biodun", "Abbey"];
// const myGirls = ["Mary", "Peniel"];

// const children = myBoys.concat(myGirls);
// console.log(children);

// const fruit = ["banana", "grape", "apple", "mango"];
// console.log(fruit.slice(0, 2));
// const totalelements = fruit.length;
// console.log(totalelements);

//Write a function that takes an array and a value as parameters. The function should add the value to the end of the array using the `push` method.

// const numbers = [1, 2, 5, 6, 9];

// const add = numbers.push(5);
// function
// console.log(add);
// function arr (array, value){
//    const result = array.push(value);
//    console.log(array);
//     return result;
// } 
// let myArray = [1, 2, 3];
// arr(myArray, 4);

//3. Write a function that takes an array and a value as parameters. The function should add the value to the beginning of the array using the `unshift` method.

// function nums (array, value){
//     const result = array.unshift(value);
//     console.log(array);
//     return result;
// }

// let myValue = [3, 4, 6, 8, 9, 2];
// nums(myValue, 2);

//8. Create an array and use the `pop` method to remove the last element from the array. Then, use the `unshift` method to add a new element to the beginning of the array.

// const met = [2, 4, 6, 8];
// console.log(met.pop());
// let num = [1,3];
// console.log(met.unshift());

//9. Write a function that takes two arrays as parameters. The function should concatenate the two arrays using the `concat` method and return the resulting array.
// function myValue(min, max){
   
// const myValue = min.concat(max);

//  return myValue;

// }
// const min = [2, 4];
// const max = [1, 5];
// const result = myValue(min, max);
// console.log(result);

//10. Create an array and use the `slice` method to create a new array that contains only the first three elements of the original array.
// const name = ["Tosin", "Ade", "James", "Dan"];
// const myName = name.slice(0, 3);
// console.log(myName);

//11. Write a function that takes an array and a value as parameters. The function should add the value to the beginning of the array using the `unshift` method, and then remove the last element from the array using the `pop` method.

// function arr(array, val){
// array.unshift(val);
// array.pop();
// return array;
// }
// const myArray = [1, 3, 9, 7];
// const myValue = 8;
// const result = arr(myArray, myValue);
// console.log(result);

//12. Create an array and use the `shift` method to remove the first element from the array. Then, use the `push` method to add a new element to the end of the array.

// const fruits = ["banana", "grape", "apple", "Avocado"];
// const citrus = fruits.shift(1);
// fruits.push("pearl", "kiwi");
// console.log(citrus);
// console.log(fruits);

//13. Write a function that takes two arrays as parameters. The function should concatenate the two vararrays using the `concat` method and return the resulting array. Then, use the `slice` method to create a new array that contains only the first three elements of the concatenated array.
// function vararrays(arr1, arr2){
//     const vararrays = arr1.concat(arr2);
//     const slicedarray = vararrays.slice(3);
//     return slicedarray;
// }
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const result = vararrays(array1, array2);
// console.log(result);

//14. Create an empty array and use the `push` method to add five elements to the array.

// const arr = [];
// arr.push("balls", "javelin", "basketball", "football", "beachball");
// console.log(arr);

//15. Write a function that takes an array as a parameter. The function should remove the last element from the array using the `pop` method, and then add a new element to the beginning of the array using the `unshift` method.
// function arr(array, newElement){
//     array.pop();

//     array.unshift(newElement);

//     return array;
// }

// const myArray = [1, 2, 3, 4];
// const newFirstElement = 5;
// const result = arr(myArray, newFirstElement);
// console.log(result);

//16. Create an array and use the `shift` method to remove the first element from the array. Then, use the `concat` method to combine the remaining elements with another array.

// const array = [20, 12, 11, 9, 16];
// const remove = array.shift();
// const newVar = [1, 13, 15];
// const combo = array.concat(newVar);
// console.log(combo);

//17. Write a function that takes two arrays as parameters. The function should concatenate the two arrays using the `concat` method and return the resulting array. Then, use the `pop` method to remove the last element from the concatenated array.

// function num(arr1, arr2) {
   
//     const max = arr1.concat(arr2);
  
//     max.pop();
  
//     return max;
//   }
  
//   const array1 = [1, 2, 3];
//   const array2 = [4, 5, 6];
//   const result = num(array1, array2);
//   console.log(result);

//18. Create an array and use the `slice` method to create a new array that contains only the last three elements of the original array.
//  const arr = [10, 12, 14, 16, 18, 20];
//  const array1 = arr.slice(3);
//  console.log(array1);

//19. Write a function that takes an array as a parameter. The function should remove the first element from the array using the `shift` method, and then add a new element to the end of the array using the `push` method.

function array(arr1, newElement){
    arr1.shift();

    arr1.push(newElement);
    return arr1;
}
const val = ["Banana", "Orange", "Apple", "Mango"];
const fruits = array(val, "Pineapple");
console.log(fruits);

//20. Create an array and use the `pop` method to remove the last element from the array. Then, use the `unshift` method to add a new element to the beginning of the array

const myArr = [12, 23, 13, 33, 55];
let  myArray = myArr.pop();
console.log(myArray);

 myArr.unshift(60);
console.log("updated array:", myArr);

