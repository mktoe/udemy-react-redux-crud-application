import React, { Component } from 'react';

/*
class App extends Component {
  render() {
    const greeting = "HiTom!";
    const dom = <h1>{greeting}</h1>;
    return dom;
  }
}
*/

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }

  hundlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  hundleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return(
      <React.Fragment>
        <div>count : {this.state.count}</div>
        <button onClick={this.hundlePlusButton}> + 1</button>
        <button onClick={this.hundleMinusButton}> - 1</button>
      </React.Fragment>
    )
  }
}


export default App;
