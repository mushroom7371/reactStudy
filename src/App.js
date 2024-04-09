import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import shoes1 from "./img/shoes1.jpg";
import shoes2 from "./img/shoes2.jpg";
import shoes3 from "./img/shoes3.jpg";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{ marginLeft: "20px" }}>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
            <Nav.Link href="#MyPage">MyPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col sm>
            <img src={shoes1} width="80%" alt="신발1" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src={shoes2} width="80%" alt="신발2" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src={shoes3} width="80%" alt="신발3" />
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default App;
