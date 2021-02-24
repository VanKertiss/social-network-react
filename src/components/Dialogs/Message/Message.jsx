import React from 'react';
import HS from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={HS.message}> {props.message} </div>
}

export default Message;