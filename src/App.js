import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./containers/Blog/Blog";

class App extends Component {
  render() {
    // <BrowserRouter basename='/my-add'> .. </BrowserRouter -  If you are serving your app from a subdirectory you need to set basename.
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
