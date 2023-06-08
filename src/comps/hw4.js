import React, { Component } from 'react'

export default class Hw4 extends Component {
    state = { food: "pizza.jpg" }


    changeFood = (e) => {
        console.log(e.target.value );
        this.setState({ food: e.target.value });
    }

    render() {
        return (
            <div className='p-2 ofer'>
                <h2>Enter your food: </h2>
                <select value={this.state.food} onChange={this.changeFood}>
                    <option value="pizza.jpg">pizza</option>
                    <option value="chicken.jpg">chicken</option>
                    <option value="coffee.jpg" >coffee</option>
                    <option value="cake.jpg">cake</option>
                </select>
                <br></br>
                <img src={"/images/"+this.state.food} width="200"/>


            </div>
        )
    }
}