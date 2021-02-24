import React from "react";
import Post from "./../Post/Post";
import CreatePostForm from './CreatePostForm';


const CreatPost = React.memo(props => {
  console.log('yo')
  let PostElements = props.postsData.map((p) => (
      <Post
          key={p.id}
          message={p.message}
          adress="https://pbs.twimg.com/profile_images/431529196478038018/i_qx9taM.jpeg"
          like={p.like}
      />
  ));

  let onSubmit = (values) => {
    props.addPosts(values.inputPost)
  };

  return (
      <div>
        {PostElements}
        <CreatePostForm onSubmit={onSubmit} {...props}/>
      </div>
  );
});


export default CreatPost;
