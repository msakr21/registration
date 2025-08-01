import React, { useState } from 'react';
import {Button, Navbar, Form, Row, Col} from 'react-bootstrap';
import { CSVLink } from "react-csv";


function UserHeaderUI(userType, enrollmentCSVData, studentsCSVData) {
  const token = document.head.getElementsByTagName('meta')[2].content;
  const currentPageLanguage = document.getElementById("locale").getAttribute("content") || window.location.pathname.split("/")[1]
  const [displayLanguage, setDisplayLanguage] = useState(currentPageLanguage)

  const handleDisplayLanguageChange = (event) => {
    setDisplayLanguage(event.target.value);
    toggleLanguage(event.target.value);
  };

  const toggleLanguage = (value) => {
    const currentURL = window.location.pathname;
    const currentURLParts = currentURL.split("/")
    if (currentURLParts[1] != "enrollments") {
      currentURLParts[1] = value
    } else {
      currentURLParts[0] = value
    };
    const newURL = currentURLParts.join("/")
    window.location.pathname = newURL
  }

  if (userType === "admin") {
    return (<Navbar className="bg-body-tertiary justify-content-between"> <div /> <div> &emsp; &emsp; &emsp; &emsp; <a href={"/admin/enrollments"}>Enrollment Index</a> &emsp; <a href={"/admin/enrollments/new"}>New Enrollment Session</a> &emsp; <CSVLink data={enrollmentCSVData || {}} filename={"enrollments"}>Enrollments CSV file</CSVLink> &emsp; <CSVLink data={studentsCSVData || '{}'} filename={"students"}>Students CSV file</CSVLink></div> <div>
      <form action='/logout' method="post">
      <input type="hidden" name="authenticity_token" value={token} />
      <input type="hidden" name="_method" value="DELETE" />
      <Button variant="outline-danger" type="submit" > Logout </Button>
      </form>
      </div>
      </Navbar>)
  } else {
    return (
      <Row>
        <Col>
        </Col>
        <Col xs="auto">
          <Form.Select aria-label="language selection" value={displayLanguage} onChange={value => handleDisplayLanguageChange(value)}>
            <option value="en">English</option>
            <option value="es">español</option>
            <option value="ru">русский</option>
            <option value="ar">العربية</option>
          </Form.Select>
        </Col>
      </Row>
    )
  }
}

export default UserHeaderUI;
