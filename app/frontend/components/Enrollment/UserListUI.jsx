import React from 'react';
import { Button, Card, Row } from "react-bootstrap";
import AtCapacity from '~/components/Enrollment/Common/AtCapacity.jsx'
import StudentText from '~/components/Enrollment/Common/StudentText.jsx';
import LinkRendering from '~/components/Enrollment/Common/LinkRendering.jsx';
import ShowDeleteModal from '~/components/Enrollment/Common/Modals/ShowDeleteModal.jsx';

function UserListUI(userType, enrollment, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) {
  if (userType === "admin") {
    return (
      <div id="admin">
        <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
        <Card.Text>Number of Students: {enrollment.students}</Card.Text>
        <Row xs={2} md={2}>
          <Button disabled={AtCapacity(enrollment.student_limit, enrollment.students)} href={`/admin/enrollments/${enrollment.id}/students/new`} size="sm" variant="outline-dark">Add Student</Button>
          <Button href={`/admin/enrollments/${enrollment.id}/edit`} size="sm" variant="outline-dark">Edit Session</Button>
          <Button href={`/admin/enrollments/${enrollment.id}`} size="sm" variant="outline-dark">Show Details</Button>
          <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(enrollment, enrollment.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}>Delete Session</Button>
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
}

export default UserListUI;
