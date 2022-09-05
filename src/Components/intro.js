import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Media from "react-bootstrap/Media";
import Image from "react-bootstrap/Image";
import logo from "../Assets/logo.jpg";

export default () => (
  <Media className="mb-4 admin-intro">
    <Image
      roundedCircle
      width={48}
      height={48}
      src={logo}
      alt="Generic placeholder"
    />
    {/* <p className="font-monospace" style={{ fontSize: 15 }}>
      Restaurantiin logo
    </p> */}

    {/* <Media.Body>
      <h5 className="font-weight-bold mb-0">Рестораны menu</h5>
      <p className="welcome-text">Нэмэлт тайлбар</p>
    </Media.Body> */}
  </Media>
);
