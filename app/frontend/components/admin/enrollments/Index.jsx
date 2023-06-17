import React from 'react';
import { Button, Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import moment from 'moment';
import "moment-timezone";



function AdminEnrollmentIndex() {
  const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
  
  function AtCapacity(limit,number) {
    if (limit > number) {
      return false;
    } else {
      return true;
    }
  };

  function URISetter(main,id,sub,page) {
    return `/${main}/${id}/${sub}${page}`
  }

  const listEnrollments = enrollments.map((enrollment) => 
  <Col key={enrollment.id}>
  <Card className="enrollment-card" bg="light" text="dark" border="dark">
  <Card.Body>
  <Card.Title>{enrollment.location}</Card.Title>
  <Card.Subtitle>{enrollment.date}<br />{enrollment.time}</Card.Subtitle>
  <br />
  <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
  <Card.Text>Number of Students: {enrollment.students}</Card.Text>
  <Row xs={2} md={2}>
  <Button disabled={AtCapacity(enrollment.student_limit,enrollment.students)} href={URISetter("enrollments",enrollment.id,"students/","new")} size="sm" variant="outline-dark">Add Student</Button>
  <Button href={URISetter("admin/enrollments",enrollment.id,"edit","")} size="sm" variant="outline-dark">Edit Session</Button>
  <Button href={URISetter("admin/enrollments",enrollment.id,"","")} size="sm" variant="outline-dark">Show Details</Button>
  <Button href={URISetter("admin/enrollments",enrollment.id,"delete","")} size="sm" variant="outline-dark">Delete Session</Button>
  </Row>
  </Card.Body>
  </Card>
  </Col>
  );

  return <Card border="light">
          <Card.Header style={{textAlign: "center"}}><a href={"/admin/enrollments/new"}>New Enrollment Session</a></Card.Header>
          <Card.Title style={{textAlign: "center", margin: "2%"}}>Available Enrollment Sessions:</Card.Title>
          <Row xs={3} md={3} className="g-4">
          {listEnrollments}
          </Row>
         </Card>
};

export default AdminEnrollmentIndex;