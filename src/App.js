import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";

import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";

export default class App extends Component {
  state = {
    title: "FJ",
    users: [
      {
        id: 1,
        nama: "Fj",
        alamat: "Menggala",
        umur: "22",
        notelepon: "081273663077",
      },
      {
        id: 2,
        nama: "Wijaya",
        alamat: "Kedaton",
        umur: "20",
        notelepon: "081287654321",
      },
      {
        id: 3,
        nama: "Awi",
        alamat: "Kemiling",
        umur: "19",
        notelepon: "081212345678",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <Router>
          <Route path="/" exact>
            <HomeContainer users={this.state.users} />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer users={this.state.users} />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer />
          </Route>
        </Router>
      </div>
    );
  }
}
