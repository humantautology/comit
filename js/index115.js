function longerText(string1, string2){
    if(string1.length > string2.length){
        return console.log(string1);
    } else if (string2.length > string1.length){
        return console.log(string2);
    }
}

longerText('text', 'pusher');
longerText('pusherman', 'curtis');
longerText('godfather', 'robert');