import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
        console.log("Component Rendered");
    }, [count]);

    return (
        <div>
            <h1>Counter</h1>

            <div>{count}</div>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default Counter