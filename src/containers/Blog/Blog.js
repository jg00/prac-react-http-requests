import React, { Component } from "react";
import classes from "./Blog.module.css";

// import { Route, Link } from "react-router-dom"; // Commented for reference.  Link replaced with NavLink.
import { Route, NavLink, Switch, Redirect } from "react-router-dom"; // NavLink have extra props that allow us to define some extra styling.

// import axios from "axios";
// import axios from "../../axios";

import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
// import FullPost from "./FullPost/FullPost";

// import Post from "../../components/Post/Post";
// import FullPost from "../../components/FullPost/FullPost";
// import NewPost from "../../components/NewPost/NewPost";

class Blog extends Component {
  state = {
    auth: false
  };

  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <h1 style={{ color: "Purple" }}>Simple Blogging</h1>

          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts/"
                  exact // Need to add 'exact' because react also treats these to='/' as prefixes
                  activeClassName={classes.active}
                  // activeStyle={{
                  //   color: "#fa923f",
                  //   textDecoration: "underline"
                  // }}
                >
                  Posts
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
        <Switch>
          {/* <Route path="/" exact component={Posts} /> We needed to remove 'exact' to get the nested route to work */}
          {/* Adding a route guard */}
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : null}

          <Route path="/posts" component={Posts} />
          {/* <Route path="/:id" exact component={FullPost} /> */}

          {/* <Route path="/" component={Posts} />  One way to direct to '/' path.  Another way is to use <Redirect>*/}
          {/* <Redirect "from=" can only be used inside <Switch> else only use "to=" property */}
          <Redirect from="/" to="/posts" />
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
