import React from "react";
import { reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls.js";
import { required } from "../../utils/validators/validators.js";
import HS from '../Login/Login.module.css'
import {createdField} from "../Common/FormsControls/FormsControls";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit} action="" >

        {createdField("email", "email", Input, [required])}
        {createdField("password", "password", Input, [required], {type:"password"})}
        {createdField(null, "rememberMe", Input, [], {type:"checkbox"}, "Запомнить меня")}

      {error && <div className={HS.formSumoryError}>{error}</div>}
      <button>Login</button>
    </form>
  );
};

export default reduxForm({ form: "Login" })(LoginForm);
