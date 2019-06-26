import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// import axios from "axios";
// import axios from "../../axios";

import classes from "./Blog.module.css";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

// import Post from "../../components/Post/Post";
// import FullPost from "../../components/FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <h1 style={{ color: "Purple" }}>Simple Blogging</h1>
        </header>

        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                {/* <a href="/">Home</a> */}
              </li>
              <li>
                <Link
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </Link>
                {/* <a href="/new-post">New Post</a> */}
              </li>
            </ul>
          </nav>
        </header>

        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />

        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        {/* <Route path="/" render={() => <h1>Home 2</h1>} /> */}

        {/* <Posts /> */}

        {/* <section className={classes.Posts}>{posts}</section> */}

        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section> */}

        {/* <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
