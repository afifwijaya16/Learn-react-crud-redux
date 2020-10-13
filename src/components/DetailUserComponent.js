// rafce
import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <div>
      <Table bordered striped className="mt-2">
        <tbody>
          <tr>
            <th width="200">Nama</th>
            <td width="10">:</td>
            <td>{props.getUsersDetail.nama}</td>
          </tr>
          <tr>
            <th width="200">Alamat</th>
            <td width="10">:</td>
            <td>{props.getUsersDetail.alamat}</td>
          </tr>
          <tr>
            <th width="200">Umur</th>
            <td width="10">:</td>
            <td>{props.getUsersDetail.umur}</td>
          </tr>
          <tr>
            <th width="200">No Telepon</th>
            <td width="10">:</td>
            <td>{props.getUsersDetail.notelepon}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
