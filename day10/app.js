import React , { useState } from 'react'
const App = () => {
    const [count,setCount] = useState(0);
    const decreament = () => { setCount(count-1);}
    const increament = () => { setCount(count+1);}
    const reset = () => { setCount (0);}
    return (
        <div style={{ textAlign:"center"}}>
            <h1 style={{ backgroundColor:"black",color:"white"}}>Counter App</h1>
            <div>{count}</div>
            <button onclick={decreament}>-</button>
            <button onclick={reset}>RESET</button>
            <button onclick={increament}>+</button>
        </div>
    )
}
export default App