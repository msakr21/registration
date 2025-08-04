import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function ConfirmationPage(props) {
  const name = document.getElementById("name").getAttribute("content");
  const locale = document.getElementById("locale").getAttribute("content");
  const firstPart = document.getElementById("first_part").getAttribute("content");
  const time = document.getElementById("time").getAttribute("content");
  const date = document.getElementById("date").getAttribute("content");
  const secondPart = document.getElementById("second_part").getAttribute("content");
  const libraryNames = JSON.parse(document.getElementById("library_names").getAttribute("content"));
  const thirdPart = document.getElementById("third_part").getAttribute("content");
  const location = document.getElementById("location").getAttribute("content");
  const lastPart = document.getElementById("last_part").getAttribute("content");
  const title = document.getElementById("title").getAttribute("content");
  const note = document.getElementById("note").getAttribute("content");
  const important = document.getElementById("important").getAttribute("content");
  const pleaseNote = document.getElementById("please_note").getAttribute("content");
  const otherNote = document.getElementById("other_note").getAttribute("content");
  const screenshot = document.getElementById("screenshot").getAttribute("content");
  const here = document.getElementById("here").getAttribute("content");
  const click = document.getElementById("click").getAttribute("content");
  const returnSentence = document.getElementById("return").getAttribute("content");
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", direction: textDirection}}>
      <h3 style={{ position: "absolute", top: "27%" }}>{title}</h3>
      <div style={{ position: "absolute", top: "35%", margin: "2%" }}>
        <p style={{ textAlign: "center" }}>
          {firstPart}{name}{secondPart}{time}{thirdPart}
          <a href={`${locationMapLinkDictionary[location]}`}>{libraryNames[location]}</a>{lastPart}{date}.
        </p>
        <p style={{ textAlign: "center" }}>
          <font color="red">
            <b>
              <u>{important}</u>
            </b>
          </font>{' '}
          {note}
        </p>
        <p style={{ textAlign: "center" }}> 
          <b>
            <u>{pleaseNote}</u>
          </b>
          {otherNote}
        </p>
        <br />
        <p style={{ textAlign: "center" }}> <b><u>{screenshot}</u></b></p>
        <br />
        <p style={{ textAlign: "center" }}>
          {click}<a href={`/${locale}`}>{here}</a>{returnSentence}
        </p>
      </div>
    </div>
  );
}

export default ConfirmationPage;