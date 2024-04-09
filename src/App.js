import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import shoes1 from "./img/shoes1.jpg";
import shoes2 from "./img/shoes2.jpg";
import shoes3 from "./img/shoes3.jpg";
import { useState } from "react";
import data from "./data";
import { Route, Link, Routes, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./pages/DetailPage";

function App() {
  let [shoseData, setShoseData] = useState(data);
  let [shoseImage, setShoseImage] = useState([shoes1, shoes2, shoes3]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container style={{ marginLeft: "20px" }}>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Cart
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/event");
              }}
            >
              Event
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
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
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="location" element={<div>위치정보임</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
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

function About() {
  return (
    <div>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
