// const numbers = [10, 20];
// const firstNumber = numbers[0];
// const secondNumber = numbers[1];

// const [firstValue, secondValue] = [10, 20];

// console.log(firstValue);
// console.log(secondValue);

const user = {
    name: 'nico',
    age: 40,
    avatarImage: 'http://www.mysite.com/picture.png',
    user: 'nisnardi',
  }
  
  // const name = user.name;
  const { name, avatarImage, user: username } = user;
  //console.log(user);
  // console.log(name);
  // console.log(avatarImage);
  //console.log(username);
  // console.log(user);
  
  // spread object
  const newUser = {
    ...user,
    id: 10,
    user: 'nisnardi10'
  };
  
   //console.log(newUser);
  
  const users = [user]; //user is an object but users is an array with one index which is user
  
  const users2 = [
    ...users,
    { ...user, }
  ];
  
  users2.push({ username: 'nico' })
  console.log(users2);
  