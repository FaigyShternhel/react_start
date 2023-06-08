import React, { Component } from "react";
export default class Hw2 extends Component {
    state = { counter: 0 };
    images_ar = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"]
    next = () => {
        if (this.state.counter + 1 >= 4) {
            this.state.counter = -1;
        }
        this.setState({ counter: this.state.counter + 1 })
    }
    back = () => {
        if (this.state.counter <= 0) {
            this.state.counter = 4;
        }
        this.setState({ counter: this.state.counter - 1 })
    }
    render() {
        return (<div>
            <img src={"/images/" + this.images_ar[this.state.counter]} width="200" />
            <br></br>
            <button onClick={this.next}>next</button>
            <button onClick={this.back}>back</button>

        </div>)
    }
}