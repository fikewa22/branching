//Write a program that asks the user to enter a number and keeps asking until the user enters a negative number using a do-while loop

let number;
do {
  number = int("Please enter a number: " ,2);
} while (number >= 0);

console.log("You entered a negative number. The program has ended.");