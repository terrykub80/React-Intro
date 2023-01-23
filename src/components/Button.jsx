import React, { useState } from 'react'

export default function Button(props) {
    const [count, setCount] = useState(0);    
    
    
    function handleClick(){
        console.log('Button clicked', count, props.step)
        setCount(count + props.step)
    }

    return (
        <button className={`btn btn-${props.color} w-100 mt-2`} onClick={handleClick}>+{props.step} - {count}</button>
    )
}
