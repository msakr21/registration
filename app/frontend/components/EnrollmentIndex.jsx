import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col, Row, Alert } from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';

function EnrollmentIndex(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const deleteConfirmation = document.getElementById("data").getAttribute("delete_confirmation");
  const [deletePath, setDeletePath] = useState(null);

  function ShowDeleteModal(enrollment, id) {
    setDeletePath(`/admin/enrollments/${id}`);
    setDeleteMessage(`Are you sure you want to delete the enrollment in ${enrollment.location} on ${enrollment.date} at ${enrollment.time}`);
    setDisplayConfirmationModal(true);
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  function isAtCapacity(limit, number) {
    return limit <= number;
  }

  function DisplayDeleteSuccess(confirmation) {
    if (confirmation === 'true') {
      return <Alert variant="success" dismissible>"The enrollment was deleted successfully."</Alert>;
    } else if (confirmation === 'error') {
      return <Alert variant="danger" dismissible>"Can't delete session with registered students. Please remove students first."</Alert>;
    }
  }

  function URISetter(main, id, sub, page) {
    return `/${main}/${id}/${sub}${page}`;
  }

  function LinkRendering(capacity, id) {
    if (capacity) {
      return "/enrollments";
    } else {
      return URISetter("enrollments", id, "students", "/new");
    }
  }

  function StudentText(capacity, enrollment) {
    if (capacity) {
      return <Card.Text>Session is Full</Card.Text>;
    } else {
      return <Card.Text>Available seats: {enrollment.student_limit - enrollment.students}</Card.Text>;
    }
  }

  function UserHeaderUI(userType) {
    if (userType === "admin") {
      return <Card.Header style={{ textAlign: "center" }}><a href={"/admin/enrollments"}>Enrollment Index</a> &emsp; <a href={"/admin/enrollments/new"}>New Enrollment Session</a></Card.Header>;
    }
  }

  function UserListUI(userType, enrollment) {
    if (userType === "admin") {
      return (
        <div id="admin">
          <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
          <Card.Text>Number of Students: {enrollment.students}</Card.Text>
          <Row xs={2} md={2}>
            <Button disabled={isAtCapacity(enrollment.student_limit, enrollment.students)} href={URISetter("admin/enrollments", enrollment.id, "students", "/new")} size="sm" variant="outline-dark">Add Student</Button>
            <Button href={URISetter("admin/enrollments", enrollment.id, "edit", "")} size="sm" variant="outline-dark">Edit Session</Button>
            <Button href={URISetter("admin/enrollments", enrollment.id, "", "")} size="sm" variant="outline-dark">Show Details</Button>
            <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(enrollment, enrollment.id)}>Delete Session</Button>
          </Row>
        </div>
      );
    } else {
      return (
        <div id="student">
          {StudentText(isAtCapacity(enrollment.student_limit, enrollment.students), enrollment)}
          <div className="text-center">
            <Button disabled={isAtCapacity(enrollment.student_limit, enrollment.students)} href={LinkRendering(isAtCapacity(enrollment.student_limit, enrollment.students), enrollment.id)} size="sm" variant="outline-dark">Register for this session</Button>
          </div>
        </div>
      );
    }
  }

  const endTime = (time) => {
    let endHour = parseInt(time.slice(0,2)) + 3;
    const meridiemSwitch = {
      "P": "A",
      "A": "P"
    };
    if(endHour > 15) {
      endHour -= 12;
      return `0${endHour}${time.slice(-6)}`;
    } else if(endHour > 12 && endHour <= 15) {
      endHour -= 12;
      return (('0'+`${endHour}`).slice(-2)+`${time.slice(2,6)}`+`${meridiemSwitch[time[6]]}M`);
    } else if(endHour === 12) {
      return (('0'+`${endHour}`).slice(-2)+`${time.slice(2,6)}`+`${meridiemSwitch[time[6]]}M`);
    } else { 
      return `${('0'+ (parseInt(time.slice(0,2))+3)).slice(-2)}${time.slice(-6)}`;
    }
  }

  const listEnrollments = enrollments.map((enrollment) =>
    <Col key={enrollment.id}>
      <Card className="enrollment-card" bg="light" text="dark" border="dark">
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{enrollment.location}</Card.Title>
          <Card.Subtitle>{enrollment.date}<br />{enrollment.time} — {endTime(enrollment.time)}</Card.Subtitle>
          <br />
          {UserListUI(props.admin, enrollment)}
        </Card.Body>
      </Card>
    </Col>
  );

  return (
    <Card border="light">
      {DisplayDeleteSuccess(deleteConfirmation)}
      {UserHeaderUI(props.admin)}
      <Card.Title style={{ textAlign: "center", margin: "2%" }}>Available Enrollment Sessions:</Card.Title>
      <Row xs={3} md={3} className="g-4">
        {listEnrollments}
      </Row>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </Card>
  );
}

export default EnrollmentIndex;
