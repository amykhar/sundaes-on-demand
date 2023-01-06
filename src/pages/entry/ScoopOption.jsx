import Col from "react-bootstrap/Col";

export default function ScoopOption({ name, imagePath }) {
  return (
    <Col xs={12} sm={6} m={4} lg={3} style={{ textAlign: "center" }}>
      <img style={{ width: "75%" }} src={imagePath} alt={`${name} scoop`} />
    </Col>
  );
}
