import React from 'react';
import {Button, Navbar, Form, Row, Col} from 'react-bootstrap';
import { CSVLink } from "react-csv";


function UserHeaderUI(userType, enrollmentCSVData, studentsCSVData) {
  const token = document.head.getElementsByTagName('meta')[2].content;
  if (userType === "admin") {
    return (<Navbar className="bg-body-tertiary justify-content-between"> <div /> <div> &emsp; &emsp; &emsp; &emsp; <a href={"/admin/enrollments"}>Enrollment Index</a> &emsp; <a href={"/admin/enrollments/new"}>New Enrollment Session</a> &emsp; <CSVLink data={enrollmentCSVData} filename={"enrollments"}>Enrollments CSV file</CSVLink> &emsp; <CSVLink data={studentsCSVData} filename={"students"}>Students CSV file</CSVLink></div> <div>
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
          <Form.Select aria-label="language selection">
            <option value="en">English</option>
            <option value="es">español</option>
            <option value="ru">русский</option>
            <option value="ar">العربية</option>
          </Form.Select>
        </Col>
      </Row>
    )
  }
  //send values as params to backend via on change and link?
}

export default UserHeaderUI;
