import React, {useState} from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import HS from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../img/avatars/no_foto.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainFotoSelected = (e) => {
        if (e.target.files.length) {
            props.addMainFoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData);
        setEditMode(false);
    }

    return (
        <div>
            <img src='https://wallpaperscave.com.ua/images/original/18/07-09/man-made-bridge-65456.jpg'
                 alt='profile-logo' className={HS.logo_profile}></img>
            <div className={HS.main_foto}>
                <div>
                    <img className={HS.main_foto_description} src={props.profile.photos.small || userPhoto}
                         alt='foto'></img>
                    <div>
                        {props.isOwner && <input type={'file'} onChange={onMainFotoSelected}/>}
                    </div>
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}
                                       updateStatus={props.updateStatus} status={props.status}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} isOwner={props.isOwner} updateStatus={props.updateStatus}
                                   status={props.status}/>}
            </div>
        </div>
    )
}

const ProfileData = ({isOwner, goToEditMode, profile, updateStatus, status}) => {

    return <div>
        <div>{isOwner && <button onClick={goToEditMode}>Редактировать данные</button>}</div>
        <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className={HS.name}><b>Имя</b>: {" " + profile.fullName}</div>
            <span
                className={HS.name}><b>Девиз по жизни</b>: {" " + profile.aboutMe && profile.aboutMe !== null ? profile.aboutMe : "Нету :("}</span>
            <div className={HS.name}><b>В поиске работы</b>: {" " + profile.lookingForAJob ? "да" : "нет"}</div>
            {profile.lookingForAJob &&
            <div className={HS.name}><b>Hard skill</b>: {" " + profile.lookingForAJobDescription}</div>
            }
        </div>
        <div className={HS.contact}>
            <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;