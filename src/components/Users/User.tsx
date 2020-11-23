import React from 'react'

type propType = {
    key?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    message?: string,
    phone?: string,
    timestamp?: string
}


const User = ({firstName, lastName, email, message, phone, timestamp}:propType) => {

    return <li>
        <h3>{firstName}, {lastName}</h3>
        <p>{message}</p>
        <span>{timestamp}</span>
    </li>
}
export default User