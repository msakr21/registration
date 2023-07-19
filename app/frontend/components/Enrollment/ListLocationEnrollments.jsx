import React from 'react';
import EndTime from '~/components/Enrollment/Common/EndTime.jsx';
import { Card, Col } from "react-bootstrap";
import UserListUI from '~/components/Enrollment/UserListUI.jsx';
  
const ListLocationEnrollments = (user, enrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) => {
  return enrollments.map((enrollment) => (
    <Col key={enrollment.id}>
      <Card className="enrollment-card" bg="light" text="dark" border="dark">
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{enrollment.location}</Card.Title>
          <Card.Subtitle>{enrollment.date}<br />{enrollment.time} — {EndTime(enrollment.time)}</Card.Subtitle>
          <br />
          {UserListUI(user, enrollment, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default ListLocationEnrollments;
