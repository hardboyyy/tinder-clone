import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar'

import './ChatScreen.css';
const ChatScreeen = () => {
    const [ messages, setMessages ] = useState([]);
    const [ input, setInput ] = useState('')

    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/03/2020</p>
            {messages.map(message => (
                message.name ? (
                <div className="chatScreen__message">
                    <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                    <p className="chatScreen__text"> {message.message} </p>
                </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
                
            ))}
            <div>
                <form className="chatScreen__input">
                    <input 
                        value={input}
                        onChange={(event) => setInput(event.target.value)}
                        className="chatScreen__inputField"
                        type="text"
                        placeholder="Enter a message"
                    />
                    <button type='sumit' onClick={handleSend} className="chatScreen__button">SEND</button>
                </form>
            </div>
        </div>
        
    )
}

export default ChatScreeen
