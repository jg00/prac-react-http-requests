import React, { Component } from "react";
import axios from "axios";
import classes from "./FullPost.module.css";

export class FullPost extends Component {
  state = {
    loadedPost: null
  };

  // Capture post by id.  Use mount b/c we are not updating.  We are adding to and from the DOM.
  componentDidMount() {
    console.log("FullPost.js_componentDidMount", this.props);

    this.loadData();
  }

  componentDidUpdate() {
    /* 
      Important - You need to handle changtes in componentDidUpdate if the componenet is already loaded 
      through routing because the router will 'not unmount' the old one (and mount the same one again)
      with different data.  It will reuse the old one and just adjust the route parameter.

      >> You will need to react to this new parameter.  You can react to this in componentDidUpdate
      which "will be called because the props changed".  You receive new props with a new
      match object with a new params object with the new id.  This is important to understand
      when working with nexted routes.


      */
    console.log("FullPost.js_componentDidUpdate", this.props);
    this.loadData();
  }

  loadData() {
    // Send http request only if we want to load a new post
    // if (this.props.id) { // for previous version
    if (this.props.match.params.id) {
      /* 1 If we initially do not have a loadedPost ie null
          2 or If we do have a loadedPost and current loadedPost.id not equal to new props.id (ie different)*/
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id) // Note this.props.match.params.id is a string so need to convert to integer using + or !=.
      ) {
        axios.get(`/posts/${this.props.match.params.id}`).then(response => {
          this.setState({
            loadedPost: response.data
          });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.match.params.id}`).then(response => {
      // console.log(response);
      alert("Delete request sent to /delete/:id");
    });
  };

  render() {
    // Initial display
    let post = <p style={{ textAlign: "center" }}>Please select a post</p>;

    // Temporary display until data fetched
    if (this.props.match.params.id) {
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
