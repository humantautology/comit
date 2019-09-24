import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// giving me problems const myStyles= { fontSize = '100px'}

// const Welcome = (props)=> {
//     // this is a component(needs to be capital W) i.e 1 function that returns a piece of UI to be rendered.
//     // console.log(props);
//     //consoling props shows props is an object
//     // console.log(props.message);

//     const { message, color } = props;
//     return <h1 style={{ color: color}}>{message}</h1>
// };





 ReactDOM.render(
    <App />,
 document.getElementById('root')
 );


