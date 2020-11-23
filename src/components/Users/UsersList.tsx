import React from 'react'
import styles from './users.module.scss'

const UsersList = ({children}: any) => {
    const listRef: any = React.useRef(null)
    const [toEnd, setToEnd] = React.useState(true)
    const [toStart, setToStart] = React.useState(false)
    
    const onScrollHandler = (e: any) => {
        e.target.scrollTop > 0 ? 
            setToStart(true) : 
            setToStart(false)

        e.target.scrollTop + e.target.offsetHeight >= e.target.scrollHeight ?
            setToEnd(false) :
            setToEnd(true)
    }

    const scrollToTop = () => listRef.current.scrollTop = 0
    const scrollToBottom = () => listRef.current.scrollTop = listRef.current.scrollHeight


    return <div className={styles.container}>
            {toStart &&
                <button className={styles.btnUp}
                    onClick={scrollToTop}>UP</button>
            }
            {toEnd &&
                <button className={styles.btnDown}
                    onClick={scrollToBottom}>DOWN</button>
            }
        <ul ref={listRef} onScroll={onScrollHandler} className={styles.wrapper}>
        {children}
    </ul>

    </div> 
    
    
}

export default UsersList