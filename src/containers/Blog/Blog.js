import React, { Component } from "react";
import axios from "axios";
import classes from "./Blog.module.css";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      // Limit posts; Add "author" property placeholder b/c jsonplaceholder does not include author data.
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return { ...post, author: "Malone" };
      });

      this.setState({
        posts: updatedPosts
      });
    });
  }

  postSelectedHandler = id => {
    this.setState({
      selectedPostId: id
    });
  };

  render() {
    // Posts
    const posts = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });

    return (
      <div>
        <header>
          <h1>Blogging</h1>
        </header>
        <section className={classes.Posts}>{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
