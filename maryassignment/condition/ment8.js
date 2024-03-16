var month = "November";
let year = 2024;
    let days;

    // Check for leap year
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

    switch(month) {
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
            days = isLeapYear ? 29 : 28;
            break;
        default:
            days = 'Unknown'; // for invalid month input
    }

    console.log(`The month of ${month} in ${year} has ${days} days.`);
