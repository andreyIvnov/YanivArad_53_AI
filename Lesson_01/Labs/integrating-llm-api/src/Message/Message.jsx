import React from 'react'

function Message({ passedMessage }) {
    const roleIsUser = passedMessage.role === 'user';
    return (
        <div style={{ textAlign: roleIsUser === true ? "right" : "left", color: roleIsUser === true ? "green" : "blue"}}>
            {passedMessage.content}
        </div>
    )
}

export default Message