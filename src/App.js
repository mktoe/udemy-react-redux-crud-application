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

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>

    )
}

const Cat = () => {
  return <div>nya!</div>
}

export default App;
