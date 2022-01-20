import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import MyNavbar from "./my-navbar";

export default ({ children }) => {
  return (
    <Container>
      <MyNavbar />
      <div className="blog-detail-page">
        <div className={`page-wrapper`}>{children}</div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">нүүр</a>
          {" | "}
          <a href="#">сургалт</a>
          {" | "}
          <a href="#">фэйсбүүк</a>
        </div>
      </footer>
    </Container>
  );
};
