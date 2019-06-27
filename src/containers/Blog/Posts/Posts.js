import React, { Component } from "react";
import axios from "../../../axios";
// import { Link } from "react-router-dom"; // One way to navigate after clicking one of Posts.
import { Route } from "react-router-dom";

import Post from "../../../components/Post/Post";
import FullPost from "../FullPost/FullPost";
import classes from "./Posts.module.css";

class Posts extends Component {
  state = {
    posts: []
    // selectedPostId: null, // I think this is still needed here
    // error: false
  };

  componentDidMount() {
    console.log("Posts.js-componentDidMount", this.props); // this.props here is passed by react-router. Note you can further pass this down to subcomponets.  See below using ...this.props.

    // Limit posts; Add "author" property placeholder b/c jsonplaceholder does not include author data.
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: "Malone" };
        });

        this.setState({
          posts: updatedPosts
        });
      })
      .catch(error => {
        console.log(error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = id => {
    // this.props.history.push({ pathname: "/posts/" + id });
    this.props.history.push("/posts/" + id);
  };

  render() {
    // console.log(this.props.match.url);  > /posts
    let posts = <p style={{ textAlign: "center" }}>Post Section Error!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={"/posts/" + post.id} key={post.id}>  // For Link example
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            // {...this.props} // One way to pass react-router props to sub components or we can use a HOC on Post component (withRouter).
            // match = {this.props.match} // Another way if you want to target certain props.
            clicked={() => this.postSelectedHandler(post.id)} // Now need to pass 'id' as part of the url
          />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className={classes.Posts}>{posts}</section>
        <Route
          // path="/:id"
          // path="/posts/:id"
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
