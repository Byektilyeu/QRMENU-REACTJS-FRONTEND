import React from "react";
import { Row, Col } from "react-bootstrap";

import GridItem from "../../Components/grid-item";
// import { getAllPosts } from "lib/api";
import Layout from "../../Components/layout";
import Intro from "../../Components/intro";
import MenuList from "../../Components/MenuList";

export default function HomePage({ posts }) {
  return (
    <Layout>
      <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row>

      <hr />
      <div>
        <MenuList />
      </div>
      {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      <Row className="mb-5">
        <Col md="4">
          <GridItem />
        </Col>
        <Col md="4">
          <GridItem />
        </Col>
        <Col md="4">
          <GridItem />
        </Col>
        <Col md="4">
          <GridItem />
        </Col>
        <Col md="4">
          <GridItem />
        </Col>
        <Col md="4">
          <GridItem />
        </Col>
      </Row>
    </Layout>
  );
}
