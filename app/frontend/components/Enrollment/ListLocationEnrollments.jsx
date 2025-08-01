import React from 'react';
import { Card, Col } from "react-bootstrap";
import UserListUI from '~/components/Enrollment/UserListUI.jsx';
import CapitalizeDateDaySpanish from "~/components/Enrollment/Common/CapitalizeDateDaySpanish.jsx";
  
  
const ListLocationEnrollments = (user, enrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale) => {
  return enrollments.map((enrollment) => (
    <Col key={enrollment.id}>
      <Card className="enrollment-card" bg="light" text="dark" border="dark">
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{enrollment.location}</Card.Title>
          <Card.Subtitle>{CapitalizeDateDaySpanish(enrollment.date, locale)}<br />{enrollment.start_time} — {enrollment.end_time}</Card.Subtitle>
          <br />
          {UserListUI(user, enrollment, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale)}
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default ListLocationEnrollments;
