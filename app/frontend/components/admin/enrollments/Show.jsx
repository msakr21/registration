import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row, Alert, Table } from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import { Trash, Pencil } from "react-bootstrap-icons";

function URISetter(main,id,sub,page) {
  return `/${main}/${id}/${sub}${page}`;
}

function AdminEnrollmentShow() {
  const enrollment = JSON.parse(document.getElementById("data").getAttribute("enrollment"));
  const students = JSON.parse(document.getElementById("data").getAttribute("students"));

  const showEnrollment = (enrollment, students)=> (
    <Row>
      <Card className="enrollment-card card mx-auto" bg="light" text="dark" border="dark" style={{ width: "40%", height: "50%"}}>
        <Card.Header style={{ textAlign: "center" }}><a href={"/admin/enrollments"}>Enrollment Index</a> &emsp; <a href={"/admin/enrollments/new"}>New Enrollment Session</a></Card.Header>
          <Card.Body style={{ textAlign: "center" }}>
            <Card.Title>{enrollment.location} — {enrollment.date}</Card.Title>
            <Card.Subtitle>{enrollment.time}</Card.Subtitle><br />
            <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
            <Card.Text>Number of Students: {students.length}</Card.Text>
            <Row xs={2} md={2} >
              <Button href={URISetter("admin/enrollments", enrollment.id, "edit", "")} size="sm" variant="outline-dark">Edit Session</Button>
              <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(enrollment, enrollment.id)}>Delete Session</Button>
            </Row>
          </Card.Body>
      </Card>
    </Row>
  );

  const enrolledStudents = (students) => {
    return (
      <div>
        <h4>Enrolled Students:</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr> 
                <td>{index + 1}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td><Pencil color="blue"></Pencil> &emsp; <Trash color="red"></Trash></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }

  return (
    <div style={{ height: "95vh" }}>
      {showEnrollment(enrollment, students)}
      {enrolledStudents(students)}
    </div>
  );
}

export default AdminEnrollmentShow;
