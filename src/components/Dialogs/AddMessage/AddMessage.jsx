import React from "react";
import HS from "./../Dialogs.module.css";
import DialogItem from "./../Dialog/DialogItem";
import Message from "./../Message/Message";
import AddMessageForm from './AddMessageForm';

const AddMessage = (props) => {
  let dialogsElements = props.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = props.messagesData.map((m) => (
    <Message key={m.id} message={m.message} />
  ));

  const onSubmit = (formData) => {
    alert(formData.inputText);
    props.addMessage(formData.inputText);
  };

  return (
    <div className={HS.dialogs}>
      <div className={HS.dialogs_items}>{dialogsElements}</div>
      <div className={HS.messages}>{messagesElements}</div>
      <AddMessageForm onSubmit={onSubmit} {...props} />
    </div>
  );
};



export default AddMessage;
