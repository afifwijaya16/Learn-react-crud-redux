import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

export default class BackComponent extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Link to={"/"}>
                <Button color="warning" size="sm">
                  <FontAwesomeIcon icon={faArrowLeft} /> Kembali
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
