import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import MessagesForm from "./AddMessageForm";


const Messages = ({messages, onAddMessage}) => {

    const addMessage = ({messageText}) => {
        onAddMessage(messageText);
    };

    const messageElements = messages.map((el) => <Message key={ el.id } message={ el.message }/>);

    return (
        <div className={ styles.messages }>
            { messageElements }
            <MessagesForm onSubmit={ addMessage }/>
        </div>
    );
};
export default Messages;
