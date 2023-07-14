import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Container } from 'react-bootstrap';

function HomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h3 style={{ position: "absolute", top: "25%" }}>Enrollment Registration System</h3>
      <div style={{ position: "absolute", top: "35%" }}>If you're an admin, please click <a href="/admin/enrollments">here</a></div>
      <div style={{ position: "absolute", top: "45%" }}>If you're a student, please click <a href="/enrollments">here</a></div>
    </div>
  );
}

export default HomePage;
