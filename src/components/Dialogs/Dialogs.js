import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messages from './Messages/Messages';


const Dialogs = ({dialogsPage, onAddMessage}) => {

    return (
        <div className={ styles.dialogs }>
            <DialogsItems dialogs={ dialogsPage.dialogs }/>
            <Messages messages={ dialogsPage.messages }
                      onAddMessage={ onAddMessage }/>
        </div>
    );
};


export default (Dialogs);

