import React, {Component} from 'react'
 import Background from './imgs/projectimageforhome.jpg'

export const homestyles= {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
}

class Home extends Component {
    constructor(){
        super()
    }
    render(){
        return <div>
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            {/* <img src = {Background} width = {'500px'} height = {'500px'}/> */}
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            <div>helllo</div>
            </div>
    }
}

export default Home