import React from 'react'


const Options = ({ getUsers, isLoading, sortUsers }: any) => {

    const [count, setCount] = React.useState(10)

    const onRangeChange = (e: any) => setCount(e.target.value)
    const getUsersHandler = () => getUsers(count)
    const onSelectHandler = (e: any) => sortUsers(e.target.value)

    return <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '600px'
    }}>
        <div>
            <input type="range" min="10" max="1000" value={count} step='55'
            onChange={onRangeChange} />
            <span>{count}</span>
            <button 
                onClick={getUsersHandler} 
                disabled={isLoading}>
                show
            </button>
        </div>
        <div>
            <span>Sort order: </span>
            <select onChange={onSelectHandler}>
                <option value="none">---</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
            </select>
        </div>
        
    </div>
}

export default Options