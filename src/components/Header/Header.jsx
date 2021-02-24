import React from 'react';
import {NavLink} from 'react-router-dom';
import HS from './Header.module.css';

const Header = (props) => {
  return <header className={HS.header}>
    <img className={HS.header_logo}
         src='https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Arizona_Coyotes.svg/1200px-Arizona_Coyotes.svg.png'
         alt='logo'></img>
    <span className={HS.title}>Dark_Fox</span>
    <div className={HS.loginBlock}>
      {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>logout</button></div> :
          <NavLink to={'/login'}>Login</NavLink>}
    </div>
  </header>;
}

export default Header;
