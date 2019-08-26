let user = { 
    username: 'batman',
    password: 'Alfred1960KPO!',
    shouldOpenBatcave: function(username, password) {
        if (username == 'batman' && password =='Alfred1960KPO!'){
        console.log('Welcome back batman!!');
    } else {
        console.log('Sorry, you can\'t enter the Batcave, try again.')
    }}
}

user.shouldOpenBatcave('batman', 'Alfred1960KPO!');