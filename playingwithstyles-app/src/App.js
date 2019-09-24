import React from 'react';
import Hello from './Hello';
import Counter from './Counter';
// import Greeting from './Greeting';
import LoginControl from './LoginControl'




const App  = () =>{
  const promptIndex = prompt("please enter a value");
  return <div className ='App'> 
    <Hello name= 'Alex'  class= 'grade5'/>
    <Counter init = {5}  index = {parseInt(promptIndex)} />
    <Counter init = {7} />
    {/* <Greeting isLoggedIn = {false} /> */}
    <LoginControl />
    </div>

}



export default App;
