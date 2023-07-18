import React from 'react';
import { Button, Card, Row } from "react-bootstrap";
import endTime from '../components/endTime.js'
import showDeleteModal from '~/components/showDeleteModal.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Print from 'print-js';

const ShowEnrollmentCard = (enrollment, students, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) => (
  <Row>
    <Card id="enrollmentCard" className="enrollment-card card mx-auto px-0" bg="light" text="dark" border="dark" style={{ width: "40%", height: "50%" }}>
      <Card.Header style={{ textAlign: "center" }}>
        <a href={"/admin/enrollments"}>Enrollment Index</a> &nbsp;&nbsp;
        <a href={"/admin/enrollments/new"}>New Enrollment Session</a> &nbsp;&nbsp;
        <Button name="print" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => {Print({ printable: 'printable', type: 'html', scanStyles: false, css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'})}}> <FontAwesomeIcon icon={faPrint} color="grey" /> </Button>
      </Card.Header>
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{enrollment.location} — {enrollment.date}</Card.Title>
        <Card.Subtitle>{enrollment.time} — {endTime(enrollment.time)}</Card.Subtitle>
        <br />
        <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
        <Card.Text>Number of Students: {students.length}</Card.Text>
        <Row xs={2} md={2}>
          <Button href={`/admin/enrollments/${enrollment.id}/edit`} size="sm" variant="outline-dark">Edit Session</Button>
          <Button size="sm" variant="outline-dark" onClick={() => showDeleteModal(enrollment, enrollment.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}>Delete Session</Button>
        </Row>
      </Card.Body>
    </Card>
  </Row>
);

export default ShowEnrollmentCard;