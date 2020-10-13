import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import FormComponent from "../components/FormComponent";
import { getUsersDetail, putUserUpdate } from "../actions/userAction";
import swal from "sweetalert";
class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  handleSubmit(data) {
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }
  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal("Failed!", this.props.errorResponDataUser, "error");
      } else {
        swal(
          "User Update!",
          "Nama : " + this.props.getResponDataUser.nama,
          "success"
        );
      }
    }
    return (
      <div>
        <Container>
          <h3>Edit User</h3>
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

export default connect(mapStateToProps, null)(EditUserContainer);
