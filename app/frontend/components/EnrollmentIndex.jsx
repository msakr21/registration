import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import AtCapacity from '~/components/AtCapacity.js'
import { Button, Card, Col, Row} from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import DisplayDeleteSuccess from '~/components/DisplayDeleteSuccess.jsx';
import NewStudentError from '~/components/NewStudentError.jsx';
import endTime from '~/components/EndTime.js';
import LinkRendering from '~/components/LinkRendering.js';
import StudentText from '~/components/StudentText.jsx';
import UserHeaderUI from '~/components/UserHeaderUI.jsx';
// import UserListUI from '~/components/UserListUI.jsx';

function EnrollmentIndex(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const mayEnrollments = JSON.parse(document.getElementById("data").getAttribute("may_enrollments"));
  const sheridanEnrollments = JSON.parse(document.getElementById("data").getAttribute("sheridan_enrollments"));
  const smokyEnrollments = JSON.parse(document.getElementById("data").getAttribute("smoky_enrollments"));
  const newStudentError = document.getElementById("data").getAttribute("new_student_error");
  const deleteConfirmation = document.getElementById("data").getAttribute("delete_confirmation");
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deletePath, setDeletePath] = useState(null);

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  function ShowDeleteModal(enrollment, id) {
    setDeletePath(`/admin/enrollments/${id}`);
    setDeleteMessage(`Are you sure you want to delete the enrollment in ${enrollment.location} on ${enrollment.date} at ${enrollment.time}`);
    setDisplayConfirmationModal(true);
  };

  function UserListUI(userType, enrollment) {
    if (userType === "admin") {
      return (
        <div id="admin">
          <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
          <Card.Text>Number of Students: {enrollment.students}</Card.Text>
          <Row xs={2} md={2}>
            <Button disabled={AtCapacity(enrollment.student_limit, enrollment.students)} href={`/admin/enrollments/${enrollment.id}/students/new`} size="sm" variant="outline-dark">Add Student</Button>
            <Button href={`/admin/enrollments/${enrollment.id}/edit`} size="sm" variant="outline-dark">Edit Session</Button>
            <Button href={`/admin/enrollments/${enrollment.id}`} size="sm" variant="outline-dark">Show Details</Button>
            <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(enrollment, enrollment.id)}>Delete Session</Button>
          </Row>
        </div>
      );
    } else {
      return (
        <div id="student">
          {StudentText(AtCapacity(enrollment.student_limit, enrollment.students), enrollment)}
          <div className="text-center">
            <Button disabled={AtCapacity(enrollment.student_limit, enrollment.students)} href={LinkRendering(AtCapacity(enrollment.student_limit, enrollment.students), enrollment.id)} size="sm" variant="outline-dark">Register for this session</Button>
          </div>
        </div>
      );
    }
  };

  const listMayEnrollments = mayEnrollments.map((enrollment) =>
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

  const listSheridanEnrollments = sheridanEnrollments.map((enrollment) =>
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

  const listSmokyEnrollments = smokyEnrollments.map((enrollment) =>
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
      {NewStudentError(newStudentError)}
      {UserHeaderUI(props.admin)}
      <Card.Title style={{ textAlign: "center", margin: "2%" }}>Eloise May Enrollment Sessions:</Card.Title>
      <Row xs={2} md={3} className="g-4 justify-content-center">
        {listMayEnrollments}
      </Row>
      <Card.Title style={{ textAlign: "center", margin: "2%" }}>Sheridan Enrollment Sessions:</Card.Title>
      <Row xs={2} md={3} className="g-4 justify-content-center">
        {listSheridanEnrollments}
      </Row>
      <Card.Title style={{ textAlign: "center", margin: "2%" }}>Smoky Hill Enrollment Sessions:</Card.Title>
      <Row xs={2} md={3} className="g-4 justify-content-center">
        {listSmokyEnrollments}
      </Row>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </Card>
  );
}

export default EnrollmentIndex;