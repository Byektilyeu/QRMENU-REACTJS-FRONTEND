import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import Layout from "../../Components/layout";
import axios from "axios";
import { SERVERAPI } from "../../constants/routes";

function HallPlan() {
  const [hallplans, setHallplans] = useState([]);

  useEffect(() => {
    getHallPlans();
  }, []);

  const getHallPlans = () => {
    axios
      .get(`${SERVERAPI}/api/v1/hallplans`)
      .then((result) => {
        setHallplans(result.data.data);
        console.log(result.data.data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Layout>
      <hr />

      {hallplans.map((e) => (
        <Link
          to={`/${e.hallPlansIdent}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <MDBCard
            shadow="0"
            border="secondary"
            background="white"
            className="mb-3"
          >
            <MDBCardHeader>{e.hallPlansIdent}</MDBCardHeader>
            <MDBCardBody className="text-secondary">
              <MDBCardTitle></MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </Link>
      ))}
    </Layout>
  );
}

export default HallPlan;
