import React from "react";
import {connect} from "react-redux";
import LoginForm from './LoginForm';
import {login} from '../../redux/authReducer';
import {Redirect} from "react-router-dom";
import HS from './Login.module.css'

const Login = (props) => {
    debugger
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/Main"}/>
    }

    return (
        <div className={HS.loginContainer}>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
