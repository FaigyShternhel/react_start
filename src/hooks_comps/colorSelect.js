import React, { useRef , useState} from 'react'


export default function ColorSelect(props) {
    const [color,setColor]=useState("red");
    const selectRef = useRef()


    return (
        <div className='p-2 ofer' style={{ color: color }}>
            <h2>Enter your favorite color: {color}</h2>
            <select defaultValue={"pink"} ref={selectRef} onChange={()=>{setColor(selectRef.current.value)}}>
                <option value="blue">blue</option>
                <option value="red">red</option>
                <option value="green" >green</option>
                <option value="orange">orange</option>
            </select>

        </div>
    )
}