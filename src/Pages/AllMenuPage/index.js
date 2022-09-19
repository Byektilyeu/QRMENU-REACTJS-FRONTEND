import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import Layout from "../../Components/layout";
import "./style.css";

import { SERVERAPI } from "../../constants/routes";
import axios from "axios";
import GetCategory from "../../Components/GetCategory";

function AllMenuPage(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    axios
      .get(`${SERVERAPI}/api/v1/categories`)
      .then((result) => {
        setCategories(result.data.data);
        // categories.map((e) => getCategMenu(e.Ident));
      })
      .catch((err) => {
        console.log("err: ", err.message);
      });
  };

  return (
    <Layout>
      <hr />
      <div className="category">
        {categories.map((e) => (
          <div className="category-item">
            <button className="category-button">
              <img className="category-card" src={e.Comment}></img>
              <p className="category-name">{e.Name}</p>
            </button>
          </div>
        ))}
      </div>
      <Row>
        {categories.map((category) => (
          <GetCategory key={category.Ident} data={category} />
        ))}
      </Row>
    </Layout>
  );
}

export default AllMenuPage;
