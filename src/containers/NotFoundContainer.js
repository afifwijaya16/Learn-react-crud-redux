import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
export default function NotFoundContainer() {
  return (
    <div>
      <Container>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="text-center">
            <h1>404 - Not Found! </h1>
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
