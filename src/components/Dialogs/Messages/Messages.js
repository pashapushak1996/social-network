import React from 'react';
import styles from './Messages.module.css';
import Message from './Message/Message';
import {addMessageCreator, changeMessageTextCreator} from '../../../redux/reducers/dialogs-reducer';


const Messages = ({messages, dispatch, newMessageText}) => {

    const onAddMessage = () => {
        dispatch(addMessageCreator());
    };
    const changeMessageValue = (value) => {
        dispatch(changeMessageTextCreator(value));
    };

    const messageElements = messages.map((el) => <Message key={el.id} message={el.message}/>);

    return (
            <div className={styles.messages}>
                {messageElements}
                <textarea onChange={({target: {value}}) => changeMessageValue(value)} value={newMessageText}
                          placeholder={`Message text`}/>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
    );
};
export default Messages;
