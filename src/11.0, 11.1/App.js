import React from "react";
import propTypes from "prop-types";


class App extends React.Component {

  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    return (
      <div>
        <h1>number is {this.state.count}</h1>
        <button onClick={this.add}>UP</button>
        <button onClick={this.minus}>DOWN</button>
      </div>
    );
  }
}

export default App;
