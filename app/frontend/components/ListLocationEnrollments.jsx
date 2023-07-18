import React from 'react';
import endTime from '~/components/endTime';
import { Card, Col } from "react-bootstrap";
import UserListUI from '~/components/UserListUI.jsx';
  
const ListLocationEnrollments = (user, enrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) => { return enrollments.map((enrollment) =>
  <Col key={enrollment.id}>
    <Card className="enrollment-card" bg="light" text="dark" border="dark">
      <Card.Body style={{ textAlign: "center" }}>
        <Card.Title>{enrollment.location}</Card.Title>
        <Card.Subtitle>{enrollment.date}<br />{enrollment.time} — {endTime(enrollment.time)}</Card.Subtitle>
        <br />
        {UserListUI(user, enrollment, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
      </Card.Body>
    </Card>
  </Col>
)};

export default ListLocationEnrollments;