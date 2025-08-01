import React from 'react';
import { Card } from "react-bootstrap";
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
  const mayLink = <a href={`/${locale}/enrollments?location=may`}>may</a>
  const smokyLink = <a href={`/${locale}/enrollments?location=smoky`}>smoky</a>
  const sheridanLink = <a href={`/${locale}/enrollments?location=sheridan`}>sh</a>
  return (
    <div>
      {UserHeaderUI(props.admin)}
      <br />
      <br />
      <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>{title}</Card.Title>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "absolute", top: "35%" }}>
        <p style={{ textAlign: "center" }}>{firstParagraph}</p>
        <p style={{ textAlign: "center" }}>{important}{firstNote} {one} {secondNote}</p>
        </div>
        <div style={{ position: "absolute", top: "50%" }}>
          {mayLink} {smokyLink} {sheridanLink}
        </div>
        {/* insert pictures with links here */}
      </div>
    </div>
  );
}

export default HomePage;
