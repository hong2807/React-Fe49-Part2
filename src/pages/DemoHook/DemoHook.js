import React, {useState } from 'react';


export default function DemoHook() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount( count + 1);
    }

    return (
        <div className="container">
            <h1 className="text-center">Demo hook</h1>
            <button className="btn btn-success" onClick={increaseCount}>Increase count</button>
            <p className="display-4">Count: {count}</p>
        </div>
    )
}

// Tạo 1 nút, khi click vào tăng lên 1

