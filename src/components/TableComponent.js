import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button, Col, Container, Row } from "reactstrap";
import {
  faEdit,
  faInfo,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const { SearchBar } = Search;
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
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "umur",
    text: "Umur",
    sort: true,
  },
  {
    dataField: "notelepon",
    text: "No Telepon",
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div class="btn-group">
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

          <Button color="danger" size="sm">
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </Button>
        </div>
      );
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

const TableComponent = (props) => {
  return (
    <div>
      <Container>
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.users}
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
                pagination={paginationFactory(options)}
              />
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TableComponent;
