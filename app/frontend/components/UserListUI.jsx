import React, { useState } from 'react';
import { Button, Card, Row} from "react-bootstrap";
import AtCapacity from '~/components/AtCapacity.js'
import StudentText from '~/components/StudentText.jsx';
import LinkRendering from '~/components/LinkRendering.js';

function UserListUI(userType, enrollment, deletePath, setDeletePath, deleteMessage, setDeleteMessage, displayConfirmationModal, setDisplayConfirmationModal) {
  function showDeleteModal(enrollment, id) {
    setDeletePath(`/admin/enrollments/${id}`);
    setDeleteMessage(`Are you sure you want to delete the enrollment in ${enrollment.location} on ${enrollment.date} at ${enrollment.time}`);
    setDisplayConfirmationModal(true);
  };

  if (userType === "admin") {
    return (
      <div id="admin">
        <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
        <Card.Text>Number of Students: {enrollment.students}</Card.Text>
        <Row xs={2} md={2}>
          <Button disabled={AtCapacity(enrollment.student_limit, enrollment.students)} href={`/admin/enrollments/${enrollment.id}/students/new`} size="sm" variant="outline-dark">Add Student</Button>
          <Button href={`/admin/enrollments/${enrollment.id}/edit`} size="sm" variant="outline-dark">Edit Session</Button>
          <Button href={`/admin/enrollments/${enrollment.id}`} size="sm" variant="outline-dark">Show Details</Button>
          <Button size="sm" variant="outline-dark" onClick={() => showDeleteModal(enrollment, enrollment.id)}>Delete Session</Button>
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

export default UserListUI;