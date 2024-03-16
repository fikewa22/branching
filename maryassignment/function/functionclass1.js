//Write a function that takes a number as an argument and checks if it is prime (returns true if it is, false otherwise).

function prime(num) {
    if (num <= 1) {
        return false;
    }

    const limit = Math.sqrt(num); // Only check up to the square root of the number

    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

//example
console.log(prime(17));