import React from 'react'
import styles from './users.module.scss'

type propType = {
    key?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    message?: string,
    phone?: string,
    date?: string
}


const User = ({firstName, lastName, email, message, phone, date}:propType) => {

    const [isVisible, setVisible] = React.useState(false)
    const showContacts = () => setVisible(true)
    const hideContacts = () => setVisible(false)


    return <li onMouseOver={showContacts} onMouseLeave={hideContacts}>

        <h3>{firstName}, {lastName}</h3>
        <p>{message}</p>
        <span>{date}</span>

        {isVisible &&
            <div className={styles.contacts}>
                <p>{email}</p>
                <p>{phone}</p>
            </div>
        }
        
    </li>
}
export default User