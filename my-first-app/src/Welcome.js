import React from 'react';

class Welcome extends React.Component {
  // Class component needs a render method so React can render
  render() {
    const { message, color } = this.props;

    // To get the component props we call this.prop
    console.log(this.props);

    // is what React will render
    return <h1 style={{ color: color }}>{message}</h1>;
  }
}

export default Welcome;








// const Welcome = (props) => {
//   const { message, color } = props;

//   return <h1 style={{ color: color }}>{message}</h1>;
// };
