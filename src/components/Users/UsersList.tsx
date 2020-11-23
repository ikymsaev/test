import React from 'react'
import styles from './users.module.scss'

const UsersList = ({children}: any) => {
    const listRef = React.useRef(null)
    const [toEnd, setToEnd] = React.useState(true)
    const [toStart, setToStart] = React.useState(false)

    const onScrollHandler = (e: any) => {
        e.target.scrollTop === 0 ? setToStart(false) : setToStart(true)
        e.target.scrollTop === e.target.scrollHeight ? setToEnd(false) : setToEnd(true)
        console.log(toEnd)
    }



    return <ul ref={listRef} onScroll={onScrollHandler} className={styles.wrapper}>
        {children}
    </ul>
}

export default UsersList