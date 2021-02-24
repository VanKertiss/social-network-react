import React from "react";
import { Field, reduxForm } from "redux-form";
import HS from "./CreatPost.module.css";
import {
  required,
  maxLength
} from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLength(10);

const CreatePostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit} className={HS.creatPost}>
      <Field
        component={Textarea}
        name={"inputPost"}
        placeholder="Введите текст поста"
        validate={[required, maxLength10]}
      />

      <div className={HS.blockButton}>
        <button className={HS.button}>Создать пост</button>
      </div>
    </form>
  );
};

export default reduxForm({ form: "newPost" })(CreatePostForm);
