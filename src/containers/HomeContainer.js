import React, { Component } from "react";
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
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
