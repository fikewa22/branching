// function countdown(num) {
//     if(num === 0) {
//         console.log('Blast off');
//     } else {
//         console.log(num);
//         countdown(num - 1);
//     }
// }

// countdown(10);

// var name= "Fikewa";
// const age= 30
// let hobby= "Driving"
// const food= "Milk"
// let cold= true
// let wall= "Thick"
// const chair= "broken"
// let cars= 5
// const road= "Tarred"
// const floor= 120

// console.log(name)
// console.log(age)
// console.log(hobby)
// console.log(food)
// console.log(cold)
// console.log(wall)
// console.log(chair)
// console.log(cars)
// console.log(road)
// console.log(floor)


// const num1= 5
// console.log(num1+3)

// const num2=10
// console.log(num2-7)

// const num3=6
// console.log(num3*4)

// const num4=20
// console.log(num4/5)

// const num5=15
// console.log(num5%4)

// Assignment

// let num6 = 8
// console.log(num6 + 1)

// let num7 = 12
// console.log(num7 - 3)

// let num8 = 9
// console.log(Math.pow(num8, 2))

// let num9 = 25
// console.log(Math.sqrt(num9))

// let num10 = 16
// console.log(Math.abs(num10))

// let result = (5 + 3) * 2 - 4 / 2;
// console.log(result)

// Problem:
// You are creating a simple budget calculator for a trip. You have the following expenses:
// 	.	Hotel cost per night: $120
// 	.	Number of nights: 4
// 	.	Food cost per day: $40
// 	.	Number of days: 5
// 	.	Entertainment cost: $75
// 	.	Miscellaneous expenses: $30
// Calculate the total cost of the trip.

// var score = 50;


// var days = "saturday";

// switch (days){
//     case "monday":
//         console.log("Today is Monday");

//         break;
//     case "tuesday":
//         console.log("Today is Tuesday");
//         break;

//     case "wednesday":
//         console.log("Today is wednesday");
//         break;

//     case "thursday":
//         console.log("Today is Thursday")
//         break;

//     case "friday":
//         console.log("Today is Friday")
//         break;

//     case "saturday":
//         console.log("Today is Saturday");
//         break;

//     case "sunday":
//             console.log("Today is sunday");
//             break;
//     default:
//         console.log("None");
// }




// /*
// if (score < 10)  {

// console.log("Score is less than 10");


// }

// else if( score == 10  ){

// console.log("score is equal to 10. ")

// }

// else if(score == 100){
// console.log(" score is 100")
// }

// else{

// console.log("Score is not less than 10.")
// }


//  */

// console.log("execution completed.")

// let age = 20;

// if (age >= 18) {
//     console.log("You are eligible to vote");
// } else {
//     console.log("You are not eligible to vote");
// }


// let time = 15;

// if (time < 12) {
//     console.log("Good morning");
// } else if (time < 18) {
//     console.log("Good afternoon");
// } else {
//     console.log("Good evening");
// }


// //Classwork
// let direction = "E";

// switch (direction) {
//     case "N":
//         console.log("You are moving north");
//         break;
//     case "S":
//         console.log("You are moving south");
//         break;
//     case "E":
//         console.log("You are moving east");
//         break;
//     case "W":
//         console.log("You are moving west");
//         break;
//     default:
//         console.log("Invalid direction");
// }

// let dayOfWeek = "Monday";

// switch (dayOfWeek) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//         console.log("Weekday");
//         break;
//     case "Saturday":
//         console.log("Saturday");
//         break;
//     case "Sunday":
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }


//Assignment
//1.
let age = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

//2.
let time = 15;

if (time < 12) {
    console.log("Good morning");
} else if (time < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

//3. 
let day = "Monday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Invalid day");
}

//4.
let x = 5;
let y = 8;

if (x > y) {
    console.log("x is greater than y");
} else if (y > x) {
    console.log("y is greater than x");
} else {
    console.log("x is equal to y");
}

//5.
function checkNumberSign(number) {
    if (number > 0) {
        console.log("The number is positive");
    } else if (number < 0) {
        console.log("The number is negative");
    } else {
        console.log("The number is zero");
    }
}

checkNumberSign(7);
checkNumberSign(-5);
checkNumberSign(0);

//6.
function convertToLetterGrade(grade) {
    let letterGrade;

    switch (true) {
        case grade >= 90 && grade <= 100:
            letterGrade = 'A';
            break;
        case grade >= 80 && grade <= 89:
            letterGrade = 'B';
            break;
        case grade >= 70 && grade <= 79:
            letterGrade = 'C';
            break;
        case grade >= 60 && grade <= 69:
            letterGrade = 'D';
            break;
        default:
            letterGrade = 'F';
    }

    return letterGrade;
}

let numericalGrade = 85;
let letterGrade = convertToLetterGrade(numericalGrade);
console.log(`Numerical Grade: ${numericalGrade}, Letter Grade: ${letterGrade}`);


// //7.
// function isLeapYear(year) {
//     if (year % 4 === 0 ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let yearToCheck = 1999;
// if (isLeapYear(yearToCheck)) {
//     console.log(`${yearToCheck} is a leap year.`);
// } else {
//     console.log(`${yearToCheck} is not a leap year.`);
// }

//8. 
let fruit = 'banana';
let fruitColor;

switch (fruit) {
    case 'apple':
        fruitColor = 'red';
        break;
    case 'banana':
        fruitColor = 'yellow';
        break;
    case 'pear':
        fruitColor = 'green';
        break;
    default:
        fruitColor = 'unknown';
}

console.log(`It's a ${fruitColor} fruit.`);


//9.

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is even.`);
    } else {
        console.log(`${number} is odd.`);
    }
}

let numberToCheck = 15;
checkEvenOrOdd(numberToCheck);

//10.
function getDaysInMonth(month, leapYear) {
    let days;

    switch (month) {
        case 'January':
        case 'March':
        case 'May':
        case 'July':
        case 'August':
        case 'October':
        case 'December':
            days = 31;
            break;
        case 'April':
        case 'June':
        case 'September':
        case 'November':
            days = 30;
            break;
        case 'February':
            days = leapYear ? 29 : 28;
            break;
        default:
            days = -1; 
    }

    return days;
}

let currentMonth = 'February';
let isLeapYear = true;
let daysInMonth = getDaysInMonth(currentMonth, isLeapYear);

if (daysInMonth === -1) {
    console.log('Invalid month.');
} else {
    console.log(`Number of days in ${currentMonth}: ${daysInMonth}`);
}

