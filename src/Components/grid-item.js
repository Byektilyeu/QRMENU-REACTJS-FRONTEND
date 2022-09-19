import { Card } from "react-bootstrap";
// import card from "../Assets/card.jpg";
import menuKfc from "../Assets/kfc.png";
import "./card.css";
export default ({ Comment, AltName, Name, Price, Instruct }) => {
  return (
    <div class="container">
      <main class="gird">
        <article>
          <img src={Comment} alt="" />
          <div class="text">
            <h3>{Name}</h3>
            <div class="op">
              {/* <p>Халуун ногоотой</p> */}
              <p class="rp">
                <strong> {Price}</strong>
              </p>
            </div>
            <button>Buy</button>
          </div>
        </article>
      </main>
    </div>
  );
};

{
  /* <Card className={`fj-card`} style={{ marginBottom: "20px" }}>
<div className="card-body-wrapper">
  <div className="view overlay">
    <Card.Img
      // style={{ height: "200px" }}
      src={Comment ? Comment : menuKfc}
      alt="Card image"
    />
  </div>
  <Card.Body>
    <Card.Title className="card-main-title">
      <p className="font-monospace" style={{ fontSize: 15 }}>
        {AltName}
      </p>
    </Card.Title>
    <Card.Text>
      <p className="font-monospace" style={{ fontSize: 13 }}>
        Үнэ: {Price}
      </p>
    </Card.Text>
    <Card.Text>
      <p className="font-monospace" style={{ fontSize: 13 }}>
        Recipe: {Instruct}
      </p>
    </Card.Text>
  </Card.Body>
</div>
</Card> */
}
