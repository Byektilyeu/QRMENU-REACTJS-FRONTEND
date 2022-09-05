import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import GridItem from "../../Components/CategGridItem";
import Layout from "../../Components/layout";
import Intro from "../../Components/intro";

import { SERVERAPI } from "../../constants/routes";
import axios from "axios";

export default function HomePage(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get(`${SERVERAPI}/api/v1/categories`)
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch((err) => {
        console.log("err: ", err.message);
      });
  };

  return (
    <Layout>
      {/* <div class="row" style="background-color:lightcyan;">
        <div class="col-xs-6">.col-xs-6</div>
        <div class="col-xs-6">.col-xs-6</div>
        <div class="col-xs-6">.col-xs-6</div>
        <div class="col-xs-6">.col-xs-6</div>
      </div> */}

      {/* <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row> */}
      <hr />

      <Row>
        {categories.map((el) => (
          <Col xs="6" md="3" key={el.Ident}>
            <Link
              to={`/${props.match.params.hallplansid}/${props.match.params.tableid}/${el.Ident}/foods`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <GridItem Comment={el.Comment} Name={el.Name} Ident={el.Ident} />
            </Link>
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
