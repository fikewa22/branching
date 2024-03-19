// // 1. Write a function that takes an array and a value as parameters. The function should add the value to the end of the array using the `push` method.

// let existingArray=[2, 5, 8, 9, 3];
// function pushArray(existingArray,value) {
//     return existingArray.push(value)
// };
// pushArray(existingArray, 10)
// console.log(existingArray)


// // 2. Create an array and use the `pop` method to remove the last element from the array.
// const popArray=[1,2,3,4,5]
// popArray.pop()
// console.log(popArray)
// // 3. Write a function that takes an array and a value as parameters. The function should add the value to the beginning of the array using the `unshift` method.
// let existingArray1=[2, 5, 8, 9, 3];
// function unshiftArray(existingArray1,value1) {
//     return existingArray1.unshift(value1)
// };
// unshiftArray(existingArray1, 10)
// console.log(existingArray1)


// // 4. Create an array and use the `shift` method to remove the first element from the array.

// const shiftArray=[1,2,3,4,5]
// shiftArray.shift()
// console.log(shiftArray)

// // 5. Write a function that takes an array and two indices as parameters. The function should return a new array that contains the elements between the two indices (inclusive) using the `slice` method.
// let existingArray2=[2, 5, 8, 9, 3];
// function sliceArray(existingArray2,startIndex, endIndex) {
//     return existingArray2.slice(startIndex,endIndex+1)
// };
// const slicedArray= sliceArray(existingArray2, 1, 4)
// console.log(slicedArray)

// // 6. Create two arrays and use the `concat` method to combine them into a single array.
// const singleFigures =[1,2,3,4,5];
// const doubleFigures =[16,17,18,19,20];
// console.log(singleFigures.concat(doubleFigures))

// // 7. Write a function that takes an array and a value as parameters. The function should add the value to the end of the array using the `push` method, and then remove the first element from the array using the `shift` method.
// let existingArray3=[2, 5, 8, 9, 3];
// function pushshiftArray(existingArray3,value3) {
//     existingArray3.push(value3);
//     console.log(existingArray3);
//     existingArray3.shift();
//     console.log(existingArray3);
//     return
// };
// pushshiftArray(existingArray3, 10)

// // 8. Create an array and use the `pop` method to remove the last element from the array. Then, use the `unshift` method to add a new element to the beginning of the array.

// const popunshiftArray=[1,2,3,4,5]
// popunshiftArray.pop()
// console.log(popunshiftArray)
// popunshiftArray.unshift(8)
// console.log(popunshiftArray)

// // 9. Write a function that takes two arrays as parameters. The function should concatenate the two arrays using the `concat` method and return the resulting array.
// const singleFigures =[1,2,3,4,5];
// const doubleFigures =[16,17,18,19,20];
// function concatArray(singleFigures,doubleFigures) {
//     console.log(singleFigures.concat(doubleFigures))
//     return
// };
// concatArray(singleFigures,doubleFigures)

// // 10. Create an array and use the `slice` method to create a new array that contains only the first three elements of the original array.
// const slicingArray=[1,2,3,4,5]
// const newSlicedArray=slicingArray.slice(0,3)
// console.log(newSlicedArray)
// // 11. Write a function that takes an array and a value as parameters. The function should add the value to the beginning of the array using the `unshift` method, and then remove the last element from the array using the `pop` method.

// let existingArray4=[2, 5, 8, 9, 3];
// function unshiftpopArray(existingArray4,value4) {
//     existingArray4.unshift(value4);
//     console.log(existingArray4);
//     existingArray4.pop();
//     console.log(existingArray4);
//     return
// };
// unshiftpopArray(existingArray4, 12)

// // 12. Create an array and use the `shift` method to remove the first element from the array. Then, use the `push` method to add a new element to the end of the array.

// const shiftpushArray=[1,2,3,4,5]
// shiftpushArray.shift()
// console.log(shiftpushArray)
// shiftpushArray.push(7)
// console.log(shiftpushArray)

// // 13. Write a function that takes two arrays as parameters. The function should concatenate the two arrays using the `concat` method and return the resulting array. Then, use the `slice` method to create a new array that contains only the first three elements of the concatenated array.

// const singleFigures1 =[1,2,3,4,5];
// const doubleFigures1 =[16,17,18,19,20];
// let combinedFigures1=[]
// function concatsliceArray(singleFigures1,doubleFigures1) {
//     combinedFigures1= singleFigures1.concat(doubleFigures1)
//     console.log(combinedFigures1)
//     console.log(combinedFigures1.slice(0,3))
//     return
// };
// concatsliceArray(singleFigures1,doubleFigures1)

// // 14. Create an empty array and use the `push` method to add five elements to the array.

// let emptyArray=[];
// emptyArray.push(1,2,3,4,5)
// console.log(emptyArray)
// // 15. Write a function that takes an array as a parameter. The function should remove the last element from the array using the `pop` method, and then add a new element to the beginning of the array using the `unshift` method.

// let existingArray5=[2, 5, 8, 9, 3];
// function popunshiftArray(existingArray5,value5) {
//     existingArray5.pop();
//     console.log(existingArray5);
//     existingArray5.unshift(value5);
//     console.log(existingArray5);
//     return
// };
// popunshiftArray(existingArray5, 30)

// // 16. Create an array and use the `shift` method to remove the first element from the array. Then, use the `concat` method to combine the remaining elements with another array.

// const shiftconcatArray=[1,2,3,4,5]
// shiftconcatArray.shift()
// console.log(shiftconcatArray)
// console.log(shiftconcatArray.concat([7,43,87,19]))

// // 17. Write a function that takes two arrays as parameters. The function should concatenate the two arrays using the `concat` method and return the resulting array. Then, use the `pop` method to remove the last element from the concatenated array.

// const singleFigures2 =[1,2,3,4,5];
// const doubleFigures2 =[16,17,18,19,20];
// let combinedFigures2=[]
// function concatpopArray(singleFigures2,doubleFigures2) {
//     combinedFigures2= singleFigures2.concat(doubleFigures2)
//     console.log(combinedFigures2)
//     combinedFigures2.pop()
//     console.log(combinedFigures2)
//     return
// };
// concatpopArray(singleFigures2,doubleFigures2)

// // 18. Create an array and use the `slice` method to create a new array that contains only the last three elements of the original array.
// let simpleArray=[16,17,18,19,20,29];
// console.log(simpleArray.slice(3))

// // 19. Write a function that takes an array as a parameter. The function should remove the first element from the array using the `shift` method, and then add a new element to the end of the array using the `push` method.

// let existingArray6=[2, 5, 8, 9, 3];
// function shiftpushArray(existingArray6,value6) {
//     existingArray6.shift();
//     console.log(existingArray6);
//     existingArray6.push(value6);
//     console.log(existingArray6);
//     return
// };
// shiftpushArray(existingArray6, 30)

// 20. Create an array and use the `pop` method to remove the last element from the array. Then, use the `unshift` method to add a new element to the beginning of the array.
let simpleArray1=[16,17,18,19,20,29];
simpleArray1.pop();
console.log(simpleArray1);
simpleArray1.unshift(53);
console.log(simpleArray1);
