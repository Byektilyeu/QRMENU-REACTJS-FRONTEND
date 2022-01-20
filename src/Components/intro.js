import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import logo from "../Assets/logo.jpg";

export default () => (
  <Media className="mb-4 admin-intro">
    <Image
      roundedCircle
      width={64}
      height={64}
      className="mr-3"
      src={logo}
      alt="Generic placeholder"
    />

    <Media.Body>
      <h5 className="font-weight-bold mb-0">Рестораны menu</h5>
      {/* <p className="welcome-text">
        
      </p> */}
    </Media.Body>
  </Media>
);
