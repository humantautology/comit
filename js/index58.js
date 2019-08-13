let hour = 4;
if (hour >= 5 && hour < 12) {
    console.log('Good morning');
} else if (hour >= 12 && hour < 18) {
    console.log('good afternoon');
} else if (hour >= 18 && hour < 22) {
    console.log('Good evening');
} else if ((hour >= 22 && hour <=24) || (hour <= 4)) {
    console.log('Good night');
}



