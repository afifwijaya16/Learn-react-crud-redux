import React, { Component } from "react";
import JumbotronComponent from "../components/JumbotronComponent";
import NavbarComponent from "../components/NavbarComponent";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";
class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }
  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "User Created!",
          "Nama : " + this.props.getResponDataUser.nama,
          "success"
        );
        this.props.history.push("/");
      }
    }
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <Container>
          <h3>Create User</h3>
          <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};

export default connect(mapStateToProps, null)(CreateUserContainer);
