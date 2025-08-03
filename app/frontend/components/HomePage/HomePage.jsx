import React from 'react';
import { Card, Row, Col  } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeaderUI from '~/components/Enrollment/UserHeaderUI.jsx';


function HomePage(props) {
  const locale = document.getElementById("locale").getAttribute("content");
  const title = document.getElementById("title").getAttribute("content");
  const firstParagraph = document.getElementById("first_paragraph").getAttribute("content");
  const firstNote = document.getElementById("first_note").getAttribute("content");
  const secondNote = document.getElementById("second_note").getAttribute("content");
  const one = document.getElementById("one").getAttribute("content");
  const important = document.getElementById("important").getAttribute("content");
  const eloiseMay = document.getElementById("eloise_may").getAttribute("content");
  const smokyHill = document.getElementById("smoky_hill").getAttribute("content");
  const sheridan = document.getElementById("sheridan").getAttribute("content");
  const mayLink = <a href={`/${locale}/enrollments?location=may`}>{eloiseMay}</a>
  const smokyLink = <a href={`/${locale}/enrollments?location=smoky`}>{smokyHill}</a>
  const sheridanLink = <a href={`/${locale}/enrollments?location=sheridan`}>{sheridan}</a>
  let textDirection = "ltr"
  if (locale === "ar") {
    textDirection = "rtl"
  }
  return (
    <Card border="light" style={{direction: textDirection}}>
      {UserHeaderUI(props.admin)}
      <br />
      <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>{title}</Card.Title>
      <Row style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center" }}>{firstParagraph}</p>
        <p style={{ display: "flex", textAlign: "center", justifyContent: "center", alignItems: "center" }}>{important}{firstNote} {one} {secondNote}</p> 
      </Row>
        <Row xs={1} md={3} className="g-4 justify-content-center">
          <Col>
            <Row xs={1} md={1}>
              <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{mayLink}</Col>
            </Row>
            <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Row>
                <a href={`/${locale}/enrollments?location=may`}><img src={"./eloise_may.jpg"} alt="Image of Eloise May Library"/></a>
              </Row>
            </Col>
          </Col>
          <Col>
            <Row xs={1} md={1}>
              <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{smokyLink}</Col>
            </Row>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <a href={`/${locale}/enrollments?location=smoky`}><img src={"./smoky_hill.jpg"} alt="Image of Smoky Hill Library"/></a>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xs={1} md={1}>
              <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{sheridanLink}</Col>
            </Row>
            <Row>
              <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <a href={`/${locale}/enrollments?location=sheridan`}><img src={"./sheridan.jpg"} alt="Image of Sheridan Library"/></a>
              </Col>
            </Row>
          </Col>
        </Row>
    </Card>
  );
}

export default HomePage;
