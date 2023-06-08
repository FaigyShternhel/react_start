import React, { Component } from "react";
export default class Hw1 extends Component {
    state = { counter: 0};
    add = () => {
        if (this.state.counter + 1 > 5) {
            this.state.counter = -1;
        }
        this.setState({ counter: this.state.counter + 1 })
    }
    minus = () => {
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (<div>
            <h2>Number: {this.state.counter}</h2>
            <button onClick={this.add}>+</button>
            <button onClick={this.minus}>-</button>

        </div>)
    }
}