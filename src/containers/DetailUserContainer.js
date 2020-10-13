import React, { Component } from "react";
import { Container } from "reactstrap";
import JumbotronComponent from "../components/JumbotronComponent";
import NavbarComponent from "../components/NavbarComponent";
import BackComponent from "../components/BackComponent";
import DetailUserComponent from "../components/DetailUserComponent";
import { connect } from "react-redux";
import { getUsersDetail } from "../actions/userAction";
class DetailUserContainer extends Component {
  // {this.props.match.params.id} cek id yang dikirim
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <Container>
          <h3 className="my-1 text-center"> Detail User </h3>
          <DetailUserComponent />
          <BackComponent />
        </Container>
      </div>
    );
  }
}
export default connect()(DetailUserContainer);
