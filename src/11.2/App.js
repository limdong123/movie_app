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
  componentDidMount() {   //시작했다
    console.log("Component rendered");
  }
  componentDidUpdate() {  //업데이트 됐다.
    console.log("I just updated");
  }
  componentWillUnmount() { //컴퍼넌트가 종료
    console.log("Goodbye, cruel world");
  }

  render() {
    console.log("I'm rendering");  //핸더
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
