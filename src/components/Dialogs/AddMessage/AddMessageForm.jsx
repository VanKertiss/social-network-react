import React from 'react';
import {Field, reduxForm} from "redux-form";
import HS from "./../Dialogs.module.css";
import {Textarea} from '../../Common/FormsControls/FormsControls';
import {
    required,
    maxLength
} from "../../../utils/validators/validators";

const maxLength50 = maxLength(50);

const AddMessageForm = (props) => {
    let addMessageText = React.createRef();

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name="inputText"
                ref={addMessageText}
                placeholder="Введите текст сообщения"
                className={HS.textarea}
                validate={[required, maxLength50]}
            />
            <button className={HS.button}>Создать сообщение</button>
        </form>
    );
};

export default reduxForm({form: "newMessage"})(AddMessageForm);