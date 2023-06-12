import React from 'react'
import { useState } from 'react'

export default function AppDate() {
  const [deadline,setDeadline]=useState("2024-01-01");
    return (
    <div className='container'>
        <DataView deadline={deadline}/>
        <DateInput setDeadline={setDeadline}/>
    </div>
  )
}