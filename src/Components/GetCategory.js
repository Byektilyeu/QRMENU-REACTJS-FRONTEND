import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

import GridItem from "./grid-item";
import Layout from "./layout";

function GetCategory(props) {
  const [categ, setCateg] = useState([]);
  //   var catID = props.data;
  //   console.log("CATID", catID);

  useEffect(() => {
    getCategMenu(props.data.Ident);
  }, []);

  const getCategMenu = (catID) => {
    axios
      .post("http://10.0.0.116:8010/api/v1/category", { category: catID })
      .then((result) => {
        setCateg(result.data.data);
        console.log("ahhcjahbchbhac", result.data.data);
      })
      .catch((err) => {
        console.log("err: ", err.message);
      });
  };

  return (
    <div>
      <p>{props.data.Name}</p>
      {categ.map((el) => (
        <GridItem
          Comment={el.Comment}
          AltName={el.AltName}
          Name={el.Name}
          Price={el.menuPriceValue}
          Instruct={el.Instruct}
        />
      ))}
    </div>
  );
}

export default GetCategory;
