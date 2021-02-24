import React from 'react';
import HS from './Navigation.module.css';
import {NavLink} from 'react-router-dom';
import SidebarItem from './Sidebare/Sidebare';

const Navigation = (props) => {

    let sidebareData = props.state.sidebar.friendsData.map(d => <SidebarItem
        key={d.id}
        className={HS.friendsItem}
        name={d.name}
        id={d.id}
        avatar={d.avatar}/>);
    return <nav>
        <div className={HS.nav}>
            <NavLink to='/Main' activeClassName={HS.active} className={HS.item}>Profile</NavLink>
            <NavLink to='/Dialogs' activeClassName={HS.active} className={HS.item}>Messages</NavLink>
            <NavLink to='/Music' activeClassName={HS.active} className={HS.item}>Music</NavLink>
            <NavLink to='/Contact' activeClassName={HS.active} className={HS.item}>Contact</NavLink>
            <NavLink to='/Users' activeClassName={HS.active} className={HS.item}>Users</NavLink>
            <NavLink to='/Setting' activeClassName={HS.active} className={HS.item}>Setting</NavLink>

        </div>
        <div className={HS.sidebar}>
            {sidebareData}
        </div>
    </nav>
}

export default Navigation;

