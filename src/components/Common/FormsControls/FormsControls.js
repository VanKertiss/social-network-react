import React from 'react';
import HS from './FormsControls.module.css';
import {Field} from "redux-form";

export const FormControl = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error;

    return (
        <div className={HS.formControl + ' ' + (showError ? HS.error : '')}>
            <div>
                {props.children}
            </div>
            {showError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const {input, meta, child, ...restprops} = props
    return (
        <FormControl {...props}><textarea {...input} {...restprops}></textarea></FormControl>)
}

export const Input = (props) => {
    const {input, meta, child, ...restprops} = props

    return (
        <FormControl {...props}><input {...input} {...restprops}></input></FormControl>)
}

export const createdField = (placeholder, name, Input, validate, props = {}, text = '') => {
    return <div>
        <Field
            placeholder={placeholder}
            name={name}
            component={Input}
            validate={validate}
            {...props}
        />{text}
    </div>
}