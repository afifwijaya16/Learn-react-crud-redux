import React, { Component } from "react";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Col, FormGroup, Button, ButtonGroup } from "reactstrap";
import { inputField } from "./InputComponent";
import UserValidation from "../validations/UserValidation";

const mapStateToProps = (state) => {
  return {
    initialValues: {
      nama: state.users.getUsersDetail.nama,
      alamat: state.users.getUsersDetail.alamat,
      umur: state.users.getUsersDetail.umur,
      notelepon: state.users.getUsersDetail.notelepon,
    },
  };
};

class FormComponent extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup row>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="nama"
                  component={inputField}
                  label="Nama :"
                  placeholder="Masukan Nama"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="umur"
                  component={inputField}
                  label="Umur :"
                  placeholder="Masukan Umur"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="alamat"
                  component={inputField}
                  label="Alamat :"
                  placeholder="Masukan Alamat"
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Field
                  type="text"
                  name="notelepon"
                  component={inputField}
                  label="No Telepon :"
                  placeholder="Masukan Alamat"
                />
              </FormGroup>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col md="12">
              <FormGroup>
                <ButtonGroup>
                  <Button
                    size="sm"
                    color="info"
                    type="submit"
                    disabled={this.props.submitting}
                  >
                    Submit
                  </Button>
                  <BackComponent />
                </ButtonGroup>
              </FormGroup>
            </Col>
          </FormGroup>
        </form>
      </div>
    );
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
