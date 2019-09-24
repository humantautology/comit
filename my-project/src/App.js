import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home, {homestyles} from './Home'



// const Home = (props) => {
//   console.log(props);

//   return <h1>Home</h1>;
// };

const Contact = (props) => {
  console.log(props);

  return <h1>Contact</h1>;
}

function App() {
  return (
    <div className="App" style = {homestyles}>
      <Router>
        <div>
          <nav>
            <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
}


export default App;
