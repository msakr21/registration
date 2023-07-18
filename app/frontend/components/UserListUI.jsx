import React from 'react';
import { Button, Card, Row} from "react-bootstrap";
import atCapacity from '~/components/atCapacity.js'
import StudentText from '~/components/StudentText.jsx';
import linkRendering from '~/components/linkRendering.js';
import showDeleteModal from '~/components/showDeleteModal.js';

function UserListUI(userType, enrollment, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) {
  if (userType === "admin") {
    return (
      <div id="admin">
        <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
        <Card.Text>Number of Students: {enrollment.students}</Card.Text>
        <Row xs={2} md={2}>
          <Button disabled={atCapacity(enrollment.student_limit, enrollment.students)} href={`/admin/enrollments/${enrollment.id}/students/new`} size="sm" variant="outline-dark">Add Student</Button>
          <Button href={`/admin/enrollments/${enrollment.id}/edit`} size="sm" variant="outline-dark">Edit Session</Button>
          <Button href={`/admin/enrollments/${enrollment.id}`} size="sm" variant="outline-dark">Show Details</Button>
          <Button size="sm" variant="outline-dark" onClick={() => showDeleteModal(enrollment, enrollment.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}>Delete Session</Button>
        </Row>
      </div>
    );
  } else {
    return (
      <div id="student">
        {StudentText(atCapacity(enrollment.student_limit, enrollment.students), enrollment)}
        <div className="text-center">
          <Button disabled={atCapacity(enrollment.student_limit, enrollment.students)} href={linkRendering(atCapacity(enrollment.student_limit, enrollment.students), enrollment.id)} size="sm" variant="outline-dark">Register for this session</Button>
        </div>
      </div>
    );
  }
};

export default UserListUI;