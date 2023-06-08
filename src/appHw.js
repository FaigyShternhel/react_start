import React,{Component} from 'react'
import Message from './massege' 
export default class AppHw extends Component{
    render(){
        return(
            <div className='container'>
                <Message msg = "First 1" bg = "red"/>
                <Message msg = "secend 2" bg = "rgd(0,255,255)"/>
            </div>
        )
    }
}