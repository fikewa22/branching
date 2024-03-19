// #### Questions on While Loop:
// 1. Write a program that prints all the even numbers from 1 to 20 using a while loop.
// 2. Write a program that calculates the sum of all the numbers from 1 to 100 using a while loop.
// 3. Write a program that prints the product of a given number with 5 using a while loop for numbers less tha 5.

// 4. Write a program that checks if a given number is prime using a while loop.
// 5. Write a program that calculates the sum of a given number 10 using a do-while loop for numbers less than 10.
// #### Questions on For Loop:
// 6. Write a program that prints all the odd numbers from 1 to 50 using a for loop.
// 7. Write a program that calculates the sum of all the multiples of 3 from 1 to 100 using a for loop.
// 8. Write a program that prints the multiplication table of a given number using a for loop.
// 9. Write a program that checks if a given number is a multiple of 10 using a for loop.
// 10. Write a program that prints all integers from 1 to 10 using for loop.
// #### Questions on Do-While Loop:
// 11. Write a program that asks the user to enter a number and keeps asking until the user enters a negative number using a do-while loop.
// 12. Write a program that calculates the average of a set of numbers entered by the user using a do-while loop.
// 13. Write a program that checks if a given number is a perfect square using a do-while loop.
// 14. Write a program that prints the product of a given number with 5 using a do-while loop for numbers less tha 5.
// 15. Write a program that calculates the sum of a given number 10 using a do-while loop for numbers less than 10.
// 1,2,6,7,11
// // if
// // if - else
// // if - eldse if else

// // switch


// //loops

// // for, while, do while.

// for(let i = 10; i<3; i++ ){
//     console.log(i)

// }

// // i = i+1;
// let i = 3;

// while(i<=5){
//     console.log("-----------------------",i)

//     logger()

//     console.log("------------------------",i)

 
// i++; 
// }

// let y = 3;
// do{
//     console.log("y is displayed as using do-while:   ",y)
//     logger()
// y++;
// }
// while( y<=5 ) 




// function logger() {

//     console.log("Abdul")
//     console.log("Mary")
//     console.log("Steph")

// //1

// let i=2
// while(i<=20){
//     console.log(i)
// i+=2;
// }

// //2

// let sum = 0;
// let j = 1;
// while (j <= 100) {
//     sum += j;
//     j++;
// }
// console.log("Sum:", sum);

// //3
// let num = 3;
// while (num < 5) {
//     console.log(num * 5);
//     num++;
// }

// //4
// function isPrime(number) {
//     let i = 2;
//     while (i < number) {
//         if (number % i === 0) {
//             console.log(`${number} is not prime.`);
//             return;
//         }
//         i++;
//     }
//     console.log(`${number} is prime.`);
// }

// isPrime(20);

// //5
// let num = 8;
// let sum = 0;
// do {
//     sum += num;
//     num++;
// } while (num < 10);
// console.log("Sum:", sum);


// //6
// for (let i = 1; i <= 50; i += 2) {
//     console.log(i);
//   }

// //7
// let sumMultiplesOfThree = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0) {
//     sumMultiplesOfThree += i;
//   }
// }

// console.log(sumMultiplesOfThree);

// //8
// let num = 9;
// for (let i = 1; i <= 12; i++) {
//     console.log(`${num} * ${i} = ${num * i}`);
// }


// //9
// let num = 30;
// if (num % 10 === 0) {
//     console.log(`${num} is a multiple of 10.`);
// } else {
//     console.log(`${num} is not a multiple of 10.`);
// }


// //10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// //11
// let userInput;
// do {
//     userInput = prompt("Enter a number: ");
//     userInput = parseInt(userInput);
// } while (userInput >= 0);


// //12
// let sum = 0;
// let count = 0;
// let userInput;

// do {
//     userInput = prompt("Enter a number (enter 0 to stop): ");
//     userInput = parseInt(userInput);

//     if (userInput !== 0) {
//         sum += userInput;
//         count++;
//     }
// } while (userInput !== 0);

// const average = sum / count;
// console.log("Average:", average);


// //13
// let number = 20;
// let isPerfectSquare = false;
// let i = 1;

// do {
//     if (i * i === number) {
//         isPerfectSquare = true;
//         break;
//     }
//     i++;
// } while (i <= number / 2);

// if (isPerfectSquare) {
//     console.log(`${number} is a perfect square.`);
// } else {
//     console.log(`${number} is not a perfect square.`);
// }



// //14
// let num = 3;
// do {
//     console.log(num * 5);
//     num++;
// } while (num < 5);

// //15
// let num = 7;
// let sum = 0;

// do {
//     sum += num;
//     num++;
// } while (num < 10);

// console.log("Sum:", sum);
