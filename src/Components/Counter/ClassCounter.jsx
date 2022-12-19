import React, { Component } from "react";
import style from "./ClassCounter.module.css";
class ClassCounter extends Component {
  state = { name: "", count: 0 };
  componentDidMount() {
    document.title = `clicked:   ${this.state.count} times`;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("document title updating!");
      document.title = `clicked: ${this.state.count} times`;
    }
  }
  addCountHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  onChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className={style.ClassCounter}>
        <div>
          <button onClick={this.addCountHandler}>Add Count</button>
          <p>count: {this.state.count}</p>
        </div>
        <div>
          <input type="text" onChange={this.onChangeHandler}></input>
          <p>name: {this.state.name}</p>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
