const data = [42, true, function() {return 'The meaning of life is: '}];

if (data[1] === true){
    message = `The meaning of life is: ${data[0]}`
    return console.log(message)
}
