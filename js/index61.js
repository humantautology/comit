let weekdayNumber = 7;
let message = null;

switch (weekdayNumber) {
    case 1:
        message = 'Today it\'s Monday';
        break;
    case 2:
        message = "Today it's Tuesday";
        break;
    case 3:
        message = "Today it's Wednesday";
        break;
    case 4:
        message = "Today it's Thursday";
        break;
    case 5:
        message = "Today it's Friday";
        break;
    case 6:
        message = "Today it's saturday";
        break;
    case 7:
        message = "Today it's Sunday";
        break;
    default:
        message = 'Error: Please input a number bettwen 1 and 7'
}

console.log(message);


let dayNumber = 1;

if (dayNumber == 1) {
    console.log('Today it\'s Monday');
} else if (dayNumber == 2) {
    console.log('Today it\'s Tuesday');
} else if (dayNumber == 3) {
    console.log('Today it\'s Wednesday');
} else if (dayNumber == 4) {
    console.log('Today it\'s Thursday');
} else if (dayNumber == 5) {
    console.log('Today it\'s Friday');
} else if (dayNumber == 6) {
    console.log('Today it\'s Saturday');
} else if (dayNumber == 7) {
    console.log('Today it\'s Sunday');
} else if (dayNumber == 0 || weekdayNumber > 7) {
        console.log('Error: Please input a number bettwen 1 and 7');
}
