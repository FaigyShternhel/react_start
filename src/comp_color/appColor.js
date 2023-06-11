import React from "react";
import { Component } from "react";
import ChangeColor from "./changeColor";
export default class AppColor extends Component {
    state = {color:"siler"}

changeTextColor = (_newColor) =>{
  this.setState({color:_newColor})  
}
render(){
    return(
        <div className="text-center">
            <h1 style={{color:this.state.color}}>This is parent</h1>
            <ChangeColor changeTextColor={this.changeTextColor}/>
        </div>
    )
}}