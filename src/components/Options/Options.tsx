import React from 'react'


const Options = ({getUsers, isLoading}: any) => {

    const [count, setCount] = React.useState(10)

    const onRangeChange = (e: any) => setCount(e.target.value)
    const getUsersHandler = () => getUsers(count)

    return <div style={{
        display: 'flex',
        alignItems: 'center'
    }}>
        <input type="range" min="10" max="1000" value={count} step='55'
        onChange={onRangeChange} />

        <span>{count}</span>
        <button 
        onClick={getUsersHandler} 
        disabled={isLoading}>
        show</button>
    </div>
}

export default Options