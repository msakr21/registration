import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row } from "react-bootstrap";

function EnrollmentIndex(props) {
  const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
  
  function AtCapacity(limit,number) {
    if (number < limit) {
      return false;
    } else {
      return true;
    }
  };

  function URISetter(main,id,sub,page) {
    return `/${main}/${id}/${sub}${page}`
  };

  function LinkRendering(capacity,id) {
    if (capacity == true) {
      return "/enrollments"
    } else {
      return URISetter("enrollment",id,"students","/new")
    }
  };

  function StudentText(capacity,enrollment) {
    if (capacity == true) {
      return <Card.Text>Session is Full</Card.Text>
    } else {
      return <Card.Text>Available seats: {enrollment.student_limit - enrollment.students}</Card.Text>
    }
  };

  function UserHeaderUI(userType) {
    if (userType == "admin") {
      return <Card.Header style={{textAlign: "center"}}><a href={"/admin/enrollments/new"}>New Enrollment Session</a></Card.Header>
    }
  };

  function UserListUI(userType,enrollment) {
    if (userType == "admin") {
      return <div id="admin">
               <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
               <Card.Text>Number of Students: {enrollment.students}</Card.Text>
               <Row xs={2} md={2}>
                 <Button disabled={AtCapacity(enrollment.student_limit,enrollment.students)} href={URISetter("admin/enrollments",enrollment.id,"students","/new")} size="sm" variant="outline-dark">Add Student</Button>
                 <Button href={URISetter("admin/enrollments",enrollment.id,"edit","")} size="sm" variant="outline-dark">Edit Session</Button>
                 <Button href={URISetter("admin/enrollments",enrollment.id,"","")} size="sm" variant="outline-dark">Show Details</Button>
                 <Button href={URISetter("admin/enrollments",enrollment.id,"delete","")} size="sm" variant="outline-dark">Delete Session</Button>
               </Row>
             </div>
    } else {
      return <div id="student">
               {StudentText(AtCapacity(enrollment.student_limit,enrollment.students),enrollment)}
               <div className="text-center">
                 <Button disabled={AtCapacity(enrollment.student_limit,enrollment.students)} href={LinkRendering(AtCapacity(enrollment.student_limit,enrollment.students),enrollment.id)} size="sm" variant="outline-dark">Register for this session</Button>
               </div>
             </div>
    }
  };

  const listEnrollments = enrollments.map((enrollment) => 
  <Col key={enrollment.id}>
  <Card className="enrollment-card" bg="light" text="dark" border="dark">
  <Card.Body style={{textAlign: "center"}}>
  <Card.Title>{enrollment.location}</Card.Title>
  <Card.Subtitle>{enrollment.date}<br />{enrollment.time}</Card.Subtitle>
  <br />
  {UserListUI(props.admin,enrollment)}
  </Card.Body>
  </Card>
  </Col>
  );

  return <Card border="light">
          {UserHeaderUI(props.admin)}
          <Card.Title style={{textAlign: "center", margin: "2%"}}>Available Enrollment Sessions:</Card.Title>
          <Row xs={3} md={3} className="g-4">
          {listEnrollments}
          </Row>
         </Card>
};

export default EnrollmentIndex;