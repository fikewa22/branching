 function isLeapYear(theYear) {
    if ((theYear % 4 === 0 && theYear % 100 !== 0) || theYear % 400 === 0) {
        console.log(theYear + " is a leap year.");
    } else {
        console.log(theYear + " is not a leap year.");
    }
}

// Test the function
isLeapYear(2024);
isLeapYear(1991);
isLeapYear(2000);