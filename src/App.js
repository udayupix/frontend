import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/news";
import ListingSports from "./components/listingSports";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category/:cate" component={ListingSports} />
          <Route path="/:title" component={News} />
        </Switch>
      </Router>
    );
  }
}

export default App;
