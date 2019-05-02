import React, { Component } from "react";
import classes from "./NewPost.module.css";

export class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: ""
  };

  textChangeHandler = (event, element) => {
    this.setState({
      [element]: event.target.value
    });
  };

  render() {
    return (
      <div className={classes.NewPost}>
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.textChangeHandler(event, "title")}
        />
        <label>Content</label>
        <textarea
          rows="4"
          type="text"
          value={this.state.content}
          onChange={event => this.textChangeHandler(event, "content")}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.textChangeHandler(event, "author")}
        >
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
