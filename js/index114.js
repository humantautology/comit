function revert(string){
    let index = 1
    do {
        message = string.charAt(string.length - index) 
        console.log(`${message}`)
        index = index += 1
    } while (index <= string.length)
}

revert('hello');
revert('bush');
revert('commit');
revert('pullover');
revert('jumpstart');