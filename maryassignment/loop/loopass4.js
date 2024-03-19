//Write a program that checks if a given number is a multiple of 10 using a for loop.


const number = null;

for (let i = 1; i <= 10; i++) {
  if (number === 10 * i) {
    console.log(`${number} is a multiple of 10.`);
    break;
  }
}

if (number % 10 !== 0) {
  console.log(`${number} is not a multiple of 10.`);
}