import React from "react";
import styles from "./ProfileInfo.module.css";

const Contact = ({contactTitle, contactValue}) => {
    return <div className={ styles.contact }>
        { contactValue && <b>{ contactTitle }: </b> }
        <span>{ contactValue }</span>
    </div>
};

export default Contact;