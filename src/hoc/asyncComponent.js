import React, { Component } from "react";

// Function that returns a component class
const asyncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null
    };

    // Set the state.component to the dynamically loaded component
    componentDidMount() {
      // Important - Execute importComponent() to get for example '"./NewPost/NewPost"
      // and that will return a promise
      importComponent().then(cmp => {
        this.setState({
          component: cmp.default // cmp will have one property called 'default' which is the component we will load dynamically
        });
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
