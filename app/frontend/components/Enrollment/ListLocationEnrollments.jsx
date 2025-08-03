import React from 'react';
import { Card, Col } from "react-bootstrap";
import UserListUI from '~/components/Enrollment/UserListUI.jsx';
  
const ListLocationEnrollments = (user, enrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale) => {
  
  return enrollments.map((enrollment) => (
    <Col key={enrollment.id}>
      <Card className="enrollment-card" bg="light" text="dark" border="dark">
        <Card.Body style={{ textAlign: "center" }}>
          {UserListUI(user, enrollment, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale)}
        </Card.Body>
      </Card>
    </Col>
  ));
};

export default ListLocationEnrollments;
