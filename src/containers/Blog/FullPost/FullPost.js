import React, { Component } from "react";
import axios from "axios";
import classes from "./FullPost.module.css";

export class FullPost extends Component {
  state = {
    loadedPost: null
  };

  // Capture post by id
  componentDidUpdate() {
    // Send http request only if we want to load a new post
    if (this.props.id) {
      /* 1 If we initially do not have a loadedPost ie null
         2 or If we do have a loadedPost and current loadedPost.id not equal to new props.id (ie different)*/
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get(`/posts/${this.props.id}`).then(response => {
          this.setState({
            loadedPost: response.data
          });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.id}`).then(response => {
      // console.log(response);
      alert("Delete request sent to /delete/:id");
    });
  };

  render() {
    // Initial display
    let post = <p style={{ textAlign: "center" }}>Please select a post</p>;

    // Temporary display until data fetched
    if (this.props.id) {
      post = <p style={{ textAlign: "center" }}>Loading..</p>;
    }

    // Defer render till we get loadedPost properties
    if (this.state.loadedPost) {
      post = (
        <div className={classes.FullPost}>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className={classes.Edit}>
            <button className={classes.Delete} onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
