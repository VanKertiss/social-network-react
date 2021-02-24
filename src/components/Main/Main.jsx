import React from "react";
import CreatPostContainer from "./CreatPost/CreatPostContainer";
import HS from "./Main.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {Redirect} from 'react-router-dom';


const Main = (props) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>;

    return (
        <main className={HS.main}>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         addMainFoto={props.addMainFoto}
                         saveProfile={props.saveProfile}/>

            <CreatPostContainer/>
        </main>
    );
};

export default Main;
