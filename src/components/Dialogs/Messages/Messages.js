import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';


const Messages = ({messages, newMessageText, onAddMessage, changeMessageValue}) => {

    const addMessage = () => {
        onAddMessage();
    };
    const updateMessageValue = (value) => {
        changeMessageValue(value);
    };

    const messageElements = messages.map((el) => <Message key={el.id} message={el.message}/>);

    return (
            <div className={styles.messages}>
                {messageElements}
                <textarea onChange={({target: {value}}) => updateMessageValue(value)} value={newMessageText}
                          placeholder={`Message text`}/>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
    );
};
export default Messages;
