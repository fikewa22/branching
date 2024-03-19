
//8. Write a program that prints the multiplication table of a given number using a for loop.
const number = 5;

console.log(`Multiplication table for ${number}:`);
for (let i = 1; i <= 10; i++) {
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}