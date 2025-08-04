import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function DuplicatePage(props) {
  const name = document.getElementById("name").getAttribute("content");
  const locale = document.getElementById("locale").getAttribute("content");
  const time = document.getElementById("time").getAttribute("content");
  const date = document.getElementById("date").getAttribute("content");
  const libraryNames = JSON.parse(document.getElementById("library_names").getAttribute("content"));
  const location = document.getElementById("location").getAttribute("content");
  const on = document.getElementById("on").getAttribute("content");
  const at = document.getElementById("at").getAttribute("content");
  const already = document.getElementById("already").getAttribute("content");
  const pleaseEmail = document.getElementById("please_email").getAttribute("content");
  let textDirection = "ltr"
  if (locale === "ar") {
    textDirection = "rtl"
  }

  const locationMapLinkDictionary = {
    "Eloise May": "https://goo.gl/maps/SCNgdrXSaN9SoVHt5",
    "Sheridan": "https://goo.gl/maps/6RMRTZ5PUANc6jDd7",
    "Smoky Hill": "https://goo.gl/maps/7Cij99GWWYapuPX89",
  };

  // Split the dictionary to its own part for ease of set up

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", direction: textDirection}}>
      <div style={{position: "absolute", top: "35%", margin: "2%"}}>
        <p style={{ textAlign: "center" }}>
          {name} {already} {<a href={`${locationMapLinkDictionary[location]}`}>{libraryNames[location]}</a>}{on} {date} {at} {time}.
        </p>
        <p style={{ textAlign: "center" }}>
          {pleaseEmail}{" "}{<a href="mailto:libraryesl@thelearningsource.org "> libraryesl@thelearningsource.org</a>}
        </p>
      </div>
    </div>
  );
}

export default DuplicatePage;
