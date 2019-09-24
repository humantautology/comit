import React from 'react'

const hellostyles = {
    textAlign: 'center',
    fontSize: '30px',
   
}
// const liststyles = {
//     color: 'yellow',
//     listStyleType: 'none',
//     display: 'inline',
//     textAlign: 'left'
// }
function Hello (props){
    return <div style = {hellostyles}>
    <h1>Hello {props.name}</h1>
    {/* <ul style = {liststyles}>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
    </ul> */}
    </div>
     

}

export default Hello;