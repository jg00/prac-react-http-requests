import React from "react";
// import { withRouter } from "react-router-dom";  // Commented but left as reference
import classes from "./Post.module.css";

const post = props => {
  console.log("Post.js-props", props); // Notice that 'react-router props' are not passed down to component tree by default (unless passed down explicitly)

  return (
    <article className={classes.Post} onClick={props.clicked}>
      <h1>{props.title}</h1>
      <div className={classes.Info}>
        <div className={classes.Author}>{props.author}</div>
      </div>
    </article>
  );
};

// Commented but good example
// withRouter is a nice way to making a component 'route aware'
// This is another way to get access to 'routing related props' which you might need for calling 'push' on the history prop
// export default withRouter(post); // Now we can also get the react-router props.

export default post;
