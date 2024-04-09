import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import shoes1 from "./img/shoes1.jpg";
import shoes2 from "./img/shoes2.jpg";
import shoes3 from "./img/shoes3.jpg";
import { useState } from "react";
import data from "./data";
import { Route, Link, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";

function App() {
  let [shoseData, setShoseData] = useState(data);
  let [shoseImage, setShoseImage] = useState([shoes1, shoes2, shoes3]);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{ marginLeft: "20px" }}>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="#MyPage">MyPage</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoseData.map((a, i) => {
                    return (
                      <ShopComponent
                        key={i}
                        shoseData={shoseData}
                        i={i}
                        shoseImage={shoseImage}
                      />
                    );
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={DetailPage()} />
      </Routes>
    </div>
  );
}

function ShopComponent(props) {
  return (
    <Col sm>
      <img src={props.shoseImage[props.i]} width="80%" alt="신발" />
      <h4>{props.shoseData[props.i].title}</h4>
      <p>{props.shoseData[props.i].price}</p>
    </Col>
  );
}

export default App;
