import React, { useState } from 'react'

export default function Tv_item(props) {
    const [showInfo, setShowInfo] = useState(false);
    let item = props.item;
    return (
        <div className='col-md-4'>
            <div className='shadow p-2 overflow-hidden h-100'>
                <img src={`images/${item.image}`} alt={item.name} className='w-50 float-start me-2 border' />
                <h4>{item.name}</h4>
                <div>Geners:{item.genere}</div>
                <div>Views:{item.views.toLocaleString()}</div>
                <button onClick={() => {
                    setShowInfo(!showInfo)
                }}>Show/hide info</button>
                {showInfo && <p>{item.descrption}</p>}
            </div>
        </div>
    )
}