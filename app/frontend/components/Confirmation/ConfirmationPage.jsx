import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function ConfirmationPage() {
  const name = document.getElementById("data").getAttribute("name");
  const date = document.getElementById("data").getAttribute("date");
  const time = document.getElementById("data").getAttribute("time");
  const location = document.getElementById("data").getAttribute("location");

  const locationMapLinkDictionary = {
    "Eloise May": "https://goo.gl/maps/SCNgdrXSaN9SoVHt5",
    "Sheridan": "https://goo.gl/maps/6RMRTZ5PUANc6jDd7",
    "Smoky Hill": "https://goo.gl/maps/7Cij99GWWYapuPX89",
  };

  // Split the dictionary to its own part for ease of set up

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h3 style={{ position: "absolute", top: "27%" }}>Request Received</h3>
      <div style={{ position: "absolute", top: "35%" }}>
        <p style={{ textAlign: "center" }}>
          Thank you, {name}, for requesting an appointment for the {time} enrollment session at{' '}
          <a href={`${locationMapLinkDictionary[location]}`}>{location}</a> Library on {date}.
        </p>
        <p style={{ textAlign: "center" }}>
          <font color="red">
            <b>
              <u>Important:</u>
            </b>
          </font>{' '}
          Your request is not yet complete. You will be contacted by the Library ELA program within 3 to 5 business days to confirm your appointment.
        </p>
        <p style={{ textAlign: "center" }}>Please take a screenshot or save this page as a pdf for future reference in case it's needed.</p>
        <p style={{ textAlign: "center" }}>
          Click <a href="/enrollments">here</a> to return to the list of enrollments.
        </p>
      </div>
    </div>
  );
}

export default ConfirmationPage;
