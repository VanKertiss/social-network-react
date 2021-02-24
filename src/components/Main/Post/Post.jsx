import React from 'react';
import HS from './Post.module.css';

const Post = (props) => {

  return <div className={HS.post}>
    <img className={HS.avatarComment} src={props.adress} alt="" />
    {props.message}
    <span>{props.like}like</span>
  </div>


}

export default Post;