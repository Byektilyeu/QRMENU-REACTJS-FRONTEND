import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import GridItem from "../../Components/grid-item";
import Layout from "../../Components/layout";
import { SERVERAPI } from "../../constants/routes";

import axios from "axios";

export default function CategoryFoods(props) {
  const [categ, setCateg] = useState([]);

  const getCategory = () => {
    axios
      .post(`${SERVERAPI}/api/v1/category`, {
        category: props.match.params.id,
      })
      .then((result) => {
        setCateg(result.data.data);
      })
      .catch((err) => {
        console.log("err: ", err.message);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Layout>
      <hr />
      <Row className="mb-5">
        {categ.map((el) => (
          <Col xs="6" md="3" key={el.menuIdent} style={{ color: "black" }}>
            <GridItem
              Comment={el.Comment}
              AltName={el.AltName}
              Name={el.Name}
              Price={el.menuPriceValue}
              Instruct={el.Instruct}
            />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
