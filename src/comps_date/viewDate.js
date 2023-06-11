import React, { Component } from "react";

export default class ViewDate extends Component {
    state = { days: 999 };
    componentDidMount() {
        console.log("comp mount like init 11111");
        this.calcDays(this.props.deadline1);
    }
    componentDidUpdate(_oldProps, _oldState) {
        if (_oldProps.deadline != this.props.deadline) {
            this.calcDays(this.props.deadline);
        }
    }
    calcDays = (_newDate) => {
        let time = Data.parse(_newDate) - Date.now();
        let newDate = Math.floor(time / (1000 * 60 * 60 * 24))
        this.setState({ days: newDate });

    }
    render() {
        return (
            <div className="text-center">
                <h2>Countdown to: {this.props.deadline1}</h2>
                <h3>Days: {this.state.days}</h3>
            </div>
        )
    }
}