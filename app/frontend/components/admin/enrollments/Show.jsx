import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row, Alert, Table } from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import { Trash, Pencil } from "react-bootstrap-icons";

function URISetter(main, id, sub, page) {
  return `/${main}/${id}/${sub}${page}`;
}

function AdminEnrollmentShow() {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const enrollment = JSON.parse(document.getElementById("data").getAttribute("enrollment"));
  const students = JSON.parse(document.getElementById("data").getAttribute("students"));
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const deleteConfirmation = document.getElementById("data").getAttribute("delete_confirmation");
  const [deletePath, setDeletePath] = useState(null);

  function ShowDeleteModal(type, id) {
    if(type === enrollment){
      setDeletePath(`/admin/enrollments/${id}`);
      setDeleteMessage(`Are you sure you want to delete the enrollment in ${type.location} on ${type.date} at ${type.time}`);
    } else {
      setDeletePath(`/admin/enrollments/${enrollment.id}/students/${id}`);
      setDeleteMessage(`Are you sure you want to remove ${type.first_name} registered at ${enrollment.location} on ${enrollment.date} at ${enrollment.time}`);
    };
    setDisplayConfirmationModal(true);
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  function DisplayDeleteSuccess(confirmation) {
    if (confirmation === 'true') {
      return <Alert variant="success" dismissible>"The student has been removed successfully."</Alert>
    } 
    // else if (confirmation === 'error') {
    //   return <Alert variant="danger" dismissible>"Can't delete session with registered students. Please remove students first."</Alert>
    // }
  };


  const showEnrollment = (enrollment, students) => (
    <Row>
      <Card className="enrollment-card card mx-auto px-0" bg="light" text="dark" border="dark" style={{ width: "40%", height: "50%" }}>
        <Card.Header style={{ textAlign: "center"}}>
          <a href={"/admin/enrollments"}>Enrollment Index</a> &emsp;
          <a href={"/admin/enrollments/new"}>New Enrollment Session</a>
        </Card.Header>
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{enrollment.location} — {enrollment.date}</Card.Title>
          <Card.Subtitle>{enrollment.time}</Card.Subtitle>
          <br />
          <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
          <Card.Text>Number of Students: {students.length}</Card.Text>
          <Row xs={2} md={2}>
            <Button href={URISetter("admin/enrollments", enrollment.id, "edit", "")} size="sm" variant="outline-dark">Edit Session</Button>
            <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(enrollment, enrollment.id)}>Delete Session</Button>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );

  const enrolledStudents = (students) => (
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
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <Button style={{  outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent"}} href={URISetter("admin/students", student.id, "edit", "")}> <Pencil color="blue" /> </Button> &emsp;
                <Button style={{  outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent"}} onClick={() => ShowDeleteModal(student, student.id)}> <Trash color="red" /> </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div style={{ height: "95vh" }}>
      {DisplayDeleteSuccess(deleteConfirmation)}
      {showEnrollment(enrollment, students)}
      {enrolledStudents(students)}
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </div>
  );
}

export default AdminEnrollmentShow;
