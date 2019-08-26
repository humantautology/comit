let user = { 
    username: 'batman',
    password: 'Alfred1960KPO!',
    shouldOpenBatcave: function(user) {
        if (user.username == 'batman' && user.password =='Alfred1960KPO!'){
        console.log('Welcome back batman!!');
    } else {
        console.log('Sorry, you can\'t enter the Batcave, try again.')
    }}
}

user.shouldOpenBatcave(user);