import React, { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
     console.log(counter+1)
    }
    return (
        <>
            Counter 
            <h1>I'm learning</h1>
        </>
    )
}
export default Counter