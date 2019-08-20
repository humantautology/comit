function getUserID(){
    return 50;
}

function isUserValid(){
    if (getUserID() > 30)
    return true;
}

if (isUserValid() === true){
    console.log('User valid');
} else {
    console.log('User not valid');
}
