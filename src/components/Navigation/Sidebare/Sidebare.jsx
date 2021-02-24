import React from 'react';
import HS from './../Navigation.module.css';

const SidebarItem = (props) => {

    return (
        <div className={HS.friendsItem}>
            <img className={HS.friendsItemFoto} src={props.avatar} alt={props.name}/>
            <span> {props.name}</span>
        </div>
    )
}

export default SidebarItem;