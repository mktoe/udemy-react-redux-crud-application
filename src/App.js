//import React, { Component } from 'react';

/*
class App extends Component {
  render() {
    const greeting = "HiTom!";
    const dom = <h1>{greeting}</h1>;
    return dom;
  }
}
*/

import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name:"Taro" , age:18},
    {name:"Hanako" , age:16},
    {name:"Noname" }
  ]

  return (
    <div>
      {
        profiles.map((profile , index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      
    </div>

    )
}

const User = (props) => {
  return <div>Hi, I am {props.name}! , I'm {props.age} years old!</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

User.defaultProps = {
  age :1
}

export default App;
