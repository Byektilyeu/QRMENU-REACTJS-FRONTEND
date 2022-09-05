import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";

import GridItem from "../../Components/grid-item";
import Layout from "../../Components/layout";
import { SERVERAPI } from "../../constants/routes";
import Modal from "react-bootstrap/Modal";

import axios from "axios";

export default function CategoryFoods(props) {
  const [categ, setCateg] = useState([]);
  const [selected, setSelected] = useState("Карт хэлбэр");
  const [modalShow, setModalShow] = useState(false);
  const [altname, setAltname] = useState(null);

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
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  const setModalShowEl = (el) => {
    setAltname(el.AltName);
    setModalShow(true);
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Layout>
      {/* <Row>
        <Col md="12">
          <Intro />
        </Col>
      </Row> */}
      <hr />

      <div className="font-monospace" style={{ fontSize: 15 }}>
        <>Харагдах хэлбэр: </>
        <input
          type="radio"
          id="Карт хэлбэр"
          name="choose"
          value="Карт хэлбэр"
          checked={selected === "Карт хэлбэр"}
          onChange={handleChange}
        />
        <label
          htmlFor="Карт хэлбэр"
          style={{ marginLeft: 10, marginRight: 10 }}
        >
          Карт
        </label>
        <input
          type="radio"
          id="Жагсаалт"
          name="choose"
          value="Жагсаалт"
          onChange={handleChange}
          checked={selected === "Жагсаалт"}
        />
        <label htmlFor="Жагсаалт" style={{ marginLeft: 10, marginTop: -10 }}>
          Жагсаалт
        </label>
      </div>

      <hr />

      <hr />

      {selected === "Жагсаалт" && (
        <Row>
          {categ.map((e, index) => (
            <>
              <Col
                xs={10}
                md={10}
                className="font-monospace"
                style={{ fontSize: 15 }}
              >
                {index + 1}. {e.AltName}
              </Col>
              <Col
                xs={2}
                md={2}
                className="font-monospace"
                style={{ fontSize: 15 }}
              >
                {e.menuPriceValue}
              </Col>
            </>
          ))}
        </Row>
      )}

      {selected === "Карт хэлбэр" && (
        <Row className="mb-5">
          {categ.map((el) => (
            <Col xs="6" md="3" key={el.menuIdent} style={{ color: "black" }}>
              <button
                style={{
                  border: 0,
                  marginLeft: "-10px",
                  marginRight: "-10px",
                  marginBottom: "-10px",
                }}
                onClick={() => setModalShowEl(el)}
              >
                <GridItem
                  Comment={el.Comment}
                  AltName={el.AltName}
                  Name={el.Name}
                  Price={el.menuPriceValue}
                  Instruct={el.Instruct}
                />
              </button>

              <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    {altname}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>{altname}</h4>
                  <p>{altname}</p>
                </Modal.Body>
                <Modal.Footer>
                  {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
              </Modal>
            </Col>
          ))}
        </Row>
      )}
    </Layout>
  );
}
