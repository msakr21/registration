import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import UserHeaderUI from '~/components/Enrollment/UserHeaderUI.jsx';

function HomePage(props) {
  const firstParagraph = document.getElementById("first_paragraph").getAttribute("content");
  return (
    <div>
      {UserHeaderUI(props.admin)}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{ position: "absolute", top: "35%" }}>
        <p style={{ textAlign: "center" }}>{firstParagraph}</p>
        <p style={{ textAlign: "center" }}>Each prospective student may register for only one enrollment session.</p>
        <p style={{ textAlign: "center" }}>Click <a href="/enrollments">here</a> to see a list of enrollment sessions to choose from. </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
