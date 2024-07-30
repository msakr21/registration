import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "absolute", top: "35%" }}>
      <p style={{ textAlign: "center" }}>Please choose a session at the library where you wish to take classes.</p>
      <p style={{ textAlign: "center" }}>Each prospective student may register for only one enrollment session. Space is limited.</p>
      <p style={{ textAlign: "center" }}>Click <a href="/enrollments">here</a> to see a list of enrollment sessions to choose from.</p>
      </div>
    </div>
  );
}

export default HomePage;
