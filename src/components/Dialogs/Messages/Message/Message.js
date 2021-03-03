import React from "react";
import styles from "./Message.module.css";

const Message = ({message}) => {
    return (
        <div>
            <span className={styles.message}>{message}</span>
        </div>
    );

}

export default Message;
