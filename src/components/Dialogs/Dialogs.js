import React from 'react';
import styles from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Messages from './Messages/Messages';

import componentWithRedirect from "../../hoc/componentWithRedirect";


const Dialogs = ({dialogsPage, onAddMessage, changeMessageValue}) => {
    return (
            <div className={ styles.dialogs }>
                <DialogsItems dialogs={ dialogsPage.dialogs }/>
                <Messages messages={ dialogsPage.messages }
                          newMessageText={ dialogsPage.newMessageText }
                          onAddMessage={ onAddMessage }
                          changeMessageValue={ changeMessageValue }/>
            </div>
    );
};


export default componentWithRedirect(Dialogs)

