import React from 'react';
import HS from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={HS.item }>            
            <NavLink className={HS.dialogItem} to={path}>
                <img src={props.avatar} alt={props.name} />
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
};

export default DialogItem;