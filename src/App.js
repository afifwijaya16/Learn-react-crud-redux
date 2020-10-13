import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";
import NotFoundContainer from "./containers/NotFoundContainer";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="/create" exact component={CreateUserContainer} />
            <Route path="/detail/:id" exact component={DetailUserContainer} />
            <Route path="/edit/:id" exact component={EditUserContainer} />
            <Route component={NotFoundContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}
