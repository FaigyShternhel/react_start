import { Component } from "react";

export default class ChangeColor extends Component {

    render() {
        return (<>
            <button className="btn btn-primary m-2 px-3 rounded-5" onClick={()=> {this.props.changeTextColor("blue")}}>blue</button>
            <button className="btn btn-success m-2 px-3 rounded-5" onClick={()=> {this.props.changeTextColor("green")}}>green</button>
            <button className="btn btn-dark m-2 px-3 rounded-5" onClick={()=> {this.props.changeTextColor("black")}}>black</button>
            <button className="btn btn-danger m-2 px-3 rounded-5" onClick={()=> {this.props.changeTextColor("red")}}>red</button></>
        )
    }
}

