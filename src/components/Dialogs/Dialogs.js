import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messages from './Messages/Messages';


const Dialogs = ({state, dispatch}) => {

    return (
            <div className={styles.dialogs}>
                <DialogsItems dialogs={state.dialogs}/>
                <Messages messages={state.messages} dispatch={dispatch} newMessageText={state.newMessageText}/>
            </div>
    );
};

export default Dialogs;