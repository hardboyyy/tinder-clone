import React from 'react';
import Chat from './Chat';
import './Chats.css'

const Chats = () => {
    return (
        <div className="chats">
            <Chat
                name="Sarah"
                message="wassup"
                timestamp="35 minutes ago"
            />
        </div>
    )
}

export default Chats
