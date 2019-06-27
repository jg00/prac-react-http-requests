import React, { Component } from "react";
import classes from "./Blog.module.css";

// import { Route, Link } from "react-router-dom"; // Commented for reference.  Link replaced with NavLink.
import { Route, NavLink, Switch } from "react-router-dom"; // NavLink have extra props that allow us to define some extra styling.

// import axios from "axios";
// import axios from "../../axios";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";

// import Post from "../../components/Post/Post";
// import FullPost from "../../components/FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <h1 style={{ color: "Purple" }}>Simple Blogging</h1>

          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  exact // Need to add 'exact' because react also treats these to='/' as prefixes
                  activeClassName={classes.active}
                  // activeStyle={{
                  //   color: "#fa923f",
                  //   textDecoration: "underline"
                  // }}
                >
                  Home
                </NavLink>
                {/* <a href="/">Home</a> */}
              </li>
              <li>
                <NavLink
                  to={{
                    // When setting up 'to=' this is always treated as an 'absolute' path (ie always appended to your domain) ex 'www.example.com/new-post'
                    // If you want a 'relative' path you can accomplish this using .match
                    // pathname: this.props.match.url + '/new-post'
                    // Use 'relative' if you want to navigate relateive to your existing path.
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                  activeClassName={classes.active}
                  // activeStyle={{
                  //   color: "#fa923f",
                  //   textDecoration: "underline"
                  // }}
                >
                  New Post
                </NavLink>
                {/* <a href="/new-post">New Post</a> */}
              </li>
            </ul>
          </nav>
        </header>

        {/* Key here is we want to now render a component page depending on the path in the url */}
        {/* Note thate react-router sees any value string in path as a 'prefix'. */}
        {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
        {/* <Route path="/" render={() => <h1>Home 2</h1>} /> */}
        {/* /:id is interpreted as any value after the slash / */}
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={NewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>

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
