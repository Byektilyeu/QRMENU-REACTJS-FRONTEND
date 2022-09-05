import { Card } from "react-bootstrap";
// import card from "../Assets/card.jpg";
import menuKfc from "../Assets/kfc.png";

export default ({ Comment, Name, Ident }) => {
  return (
    <Card className={`fj-card`} style={{ marginBottom: "20px" }}>
      <div className="card-body-wrapper">
        <div className="view overlay">
          <Card.Img src={Comment ? Comment : menuKfc} alt="Card image" />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">
            <p className="font-monospace" style={{ fontSize: 15 }}>
              {Name}
            </p>
          </Card.Title>
        </Card.Body>
      </div>
    </Card>
  );
};
