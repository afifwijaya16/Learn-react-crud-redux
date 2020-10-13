import React, { Component } from "react";
import JumbotronComponent from "../components/JumbotronComponent";
import NavbarComponent from "../components/NavbarComponent";
import TableComponent from "../components/TableComponent";
// redux
import { connect } from "react-redux";
import { getUsersList, deleteUsersData } from "../actions/userAction";
class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteUsersData());
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
