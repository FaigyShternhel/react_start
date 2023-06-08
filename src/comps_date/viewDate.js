import React, { Component } from "react";

export default class ViewDate extends Component{
    state = {days:999};
    componentDidMount(){
        console.log("comp mount like init 11111");
        this.calcDays(this.props.deadline1);
    }
    calcDays =()=>{
        let time = Data.parse(_newDate)
    }
}