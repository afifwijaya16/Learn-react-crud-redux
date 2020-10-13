import React from "react";
// table
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
// pagination
import paginationFactory from "react-bootstrap-table2-paginator";
// css table responsive
import "./TableComponent.css";
import { Button, ButtonGroup, Col, Container, Row, Spinner } from "reactstrap";
//font awesome
import {
  faEdit,
  faInfo,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// redux
import { connect } from "react-redux";
// sweetalert
import swal from "sweetalert";
import { deleteUser } from "../actions/userAction";
const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  swal({
    title: "Apakah anda yakin menghapus data ini?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id));
      swal("Data berhasil dihapus!", {
        icon: "success",
      });
    } else {
      swal("Data gagal dihapus", {
        icon: "error",
      });
    }
  });
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "id",
      text: "No",
      headerStyle: () => {
        return {
          width: "5%",
        };
      },
      sort: true,
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: true,
      headerStyle: () => {
        return {
          width: "20%",
        };
      },
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
      headerStyle: () => {
        return {
          width: "20%",
        };
      },
    },
    {
      dataField: "umur",
      text: "Umur",
      sort: true,
      headerStyle: () => {
        return {
          width: "10%",
        };
      },
    },
    {
      dataField: "notelepon",
      text: "No Telepon",
      headerStyle: () => {
        return {
          width: "20%",
        };
      },
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <ButtonGroup>
            <Link to={"detail/" + row.id}>
              <Button color="dark" size="sm">
                <FontAwesomeIcon icon={faInfo} />
                Detail
              </Button>
            </Link>
            <Link to={"edit/" + row.id}>
              <Button color="warning" size="sm">
                <FontAwesomeIcon icon={faEdit} />
                Edit
              </Button>
            </Link>

            <Button
              color="danger"
              size="sm"
              onClick={() => handleClick(props.dispatch, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
              Delete
            </Button>
          </ButtonGroup>
        );
      },
      headerStyle: () => {
        return {
          width: "25%",
        };
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  const options = {
    // pageStartIndex: 0,
    sizePerPage: 10,
    hideSizePerPage: true,
    hidePageListOnlyOnePage: true,
  };

  return (
    <div>
      <Container>
        {props.getUsersList ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={props.getUsersList}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <Row>
                  <Col>
                    <Link to={"/create"}>
                      <Button color="success" size="sm" className="mr-2">
                        <FontAwesomeIcon icon={faPlus} /> Tambah
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="Search..." />
                </div>

                <BootstrapTable
                  {...props.baseProps}
                  striped
                  wrapperClasses="table-responsive"
                  pagination={paginationFactory(options)}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-center">
            {props.errorUsersList ? (
              <h4>{props.errorUsersList} </h4>
            ) : (
              <Spinner color="warning" />
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

// data redux mengambil data
const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};

export default connect(mapStateToProps, null)(TableComponent);
