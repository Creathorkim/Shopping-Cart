import React from "react";
import { Container } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <p>404 - Page not found. </p>
    </Container>
  );
};
export default ErrorPage;
