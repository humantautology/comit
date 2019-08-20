function validateUser(username, password) {
    if(username == 'nacho' && password == 'Nerd1979'){
        console.log(`Welcome Nacho, nice to see you again`)
    }
    else if(username == 'pedro' && password == 'Batman0217'){
        console.log(`Welcome ${username}, nice to see you again`)
    } 
    else if(username == 'marta' && password == 'Mother2312'){
        console.log(`Welcome ${username}, nice to see you again`)
    } else {
        console.log('PLease input valid credentials')
    }
}

validateUser('john', 'hkshss')