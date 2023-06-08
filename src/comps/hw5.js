import React, { Component } from 'react'

export default class hw5 extends Component {
    state = { money: "USD",shekel: 0 }
    inputRef = React.createRef()


    changeMoney = () => {
        let input_val = this.inputRef.current.value;
        if (this.state.money=="USD"){
            this.setState({ shekel: input_val*3.7 });
        }
        if (this.state.money=="euro"){
            this.setState({ shekel: input_val*3.95 });
        }
        if (this.state.money=="Butt"){
            this.setState({ shekel: input_val*0.11 });
        }
    }
    changeNameMoney = (e) => {
        this.setState({ money: e.target.value });
    }

    render() {
        return (
            <div className='p-2 ofer' >
                <h2>{this.state.shekel} </h2>
                <select value={this.state.money} onChange={this.changeNameMoney}>
                    <option value="USD">USD</option>
                    <option value="euro">euro</option>
                    <option value="Butt" >Butt</option>
                </select>
                <input onInput={this.changeMoney} ref={this.inputRef} type="number" />
            </div>
        )
    }
}