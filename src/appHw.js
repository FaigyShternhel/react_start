import React,{Component} from 'react'
import Message from './massege' 
import Exchange from './exchange'
export default class AppHw extends Component{
    render(){
        return(
            <div className='container'>
                <Message msg = "First 1" bg = "red"/>
                <Message msg = "secend 2" bg = "rgb(0,255,255)"/>
                <Exchange />
            </div>
        )
    }
}