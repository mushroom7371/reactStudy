import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import { Route, Link, Routes, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import Axios from "axios";
import Loding from "./loding";

function App() {
  let [shoseData, setShoseData] = useState(data);
  let navigate = useNavigate();
  let getShoseData = () => {
    <Loding />;
    Axios.get("https://codingapple1.github.io/shop/data2.json")
      .then((result) => {
        let copy = [...shoseData, ...result.data];
        setShoseData(copy);
      })
      .catch((error) => {
        window.alert("데이터를 가져오는데 실패했습니다.");
      });
    <Loding />;
  };

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
                <Button
                  onClick={() => {
                    getShoseData();
                  }}
                >
                  데이터 추가
                </Button>
                <Row>
                  {shoseData.map((a, i) => {
                    return (
                      <ShopComponent key={i} shoseData={shoseData} i={i} />
                    );
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={<DetailPage shoseData={shoseData} />}
        />
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
  let navigate = useNavigate();
  let imagePaths =
    "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg";

  return (
    <Col
      onClick={() => {
        let path = "/detail/" + props.shoseData[props.i].id;
        navigate(path);
      }}
      sm
    >
      <img src={imagePaths} width="80%" alt="신발" />
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
