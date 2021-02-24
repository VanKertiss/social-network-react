import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import HS from "./ProfileInfo.module.css";
import {createdField, Input, Textarea} from "../../Common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, status, updateStatus}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button onClick={() => {
            }}>Сохранить данные
            </button>
        </div>
        <div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className={HS.name}><b>Имя</b>: {createdField("Full name", "fullName", Input, [])}</div>
            <span className={HS.name}><b>Девиз по жизни</b>: {createdField("About me", "aboutMe", Input, [])}</span>
            <div className={HS.name}><b>В поиске
                работы</b>: {createdField("", "lookingForAJob", Input, [], {type: "checkbox"})}</div>

            <div className={HS.name}><b>Hard skill</b>: {createdField("", "lookingForAJobDescription", Textarea, [])}
            </div>

        </div>
        <div className={HS.contact}>
            <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
            return <div>
                <b>{key}</b>: {createdField(key, "contacts." + key, Input, [])}
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'editProfile'})(ProfileDataForm)

export default ProfileDataFormReduxForm