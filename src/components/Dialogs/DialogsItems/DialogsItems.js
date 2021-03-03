import React from "react";
import styles from "./DialogsItems.module.css";
import DialogItem from "./DialogItem/DialogItem";


const DialogsItems = ({dialogs}) => {

    let dialogsElements = dialogs
        .map((dialog) => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>);

    return (
        <div className={styles.dialogsItems}>
            {dialogsElements}
        </div>
    );
}

export default DialogsItems;