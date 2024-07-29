import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ position: "absolute", top: "35%" }}>Please choose a session at the library where you wish to take classes.</div>
      <div style={{ position: "absolute", top: "40%" }}>Each prospective student may register for only one session. Space is limited.</div>
      <div style={{ position: "absolute", top: "50%" }}>Please click <a href="/enrollments">here</a> to see a list of enrollment sessions to choose from.</div>
    </div>
  );
}

export default HomePage;
