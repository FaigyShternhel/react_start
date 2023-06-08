import React, { Component } from 'react'

export default class Hw3 extends Component {
    state = { color: "orange" }


    changeColor = (e) => {
        this.setState({ color: e.target.value });
    }

    render() {
        return (
            <div className='p-2 ofer' style={{ color: this.state.color }}>
                <h2>Enter your favorite color: {this.state.color}</h2>
                <select value={this.state.color} onChange={this.changeColor}>
                    <option value="blue">blue</option>
                    <option value="red">red</option>
                    <option value="green" >green</option>
                    <option value="orange">orange</option>
                </select>

            </div>
        )
    }
}