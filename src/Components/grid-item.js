import { Card } from "react-bootstrap";
import card from "../Assets/card.jpg";

export default () => {
  return (
    <Card className={`fj-card`} style={{ marginBottom: "20px" }}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          {/* <img
            src=""
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt=""
          /> */}
          <div>
            <Card.Title className="font-weight-bold mb-1">
              Card title
            </Card.Title>
            <Card.Text className="card-date">Date</Card.Text>
          </div>
        </Card.Header>

        <div className="view overlay">
          <Card.Img src={card} alt="Card image" />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">Title</Card.Title>
          <Card.Text>Тайлбар</Card.Text>
        </Card.Body>
      </div>
    </Card>
  );
};
