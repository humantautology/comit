let user ={
    username: null,
    password: null,
    greet: function(){
        if (user.username !== null){
            return `Hello, I\'m ${user.username}`
        } else {
            return 'Please assign a username value'
        }
    },
    updaterUsername: function(string){
        user.username = string
    },
    updatePassword: function(string){
        user.password = string
    }
}

console.log(user.greet());

user.updaterUsername('bushido brown');
user.updatePassword('I kick ass');

console.log(user.greet());