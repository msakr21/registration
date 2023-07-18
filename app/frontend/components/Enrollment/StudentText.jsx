import React from 'react';
import { Card } from 'react-bootstrap';

function StudentText(capacity, enrollment) {
  if (capacity) {
    return <Card.Text>Session is Full</Card.Text>;
  } else {
    return <Card.Text>Available seats: {enrollment.student_limit - enrollment.students}</Card.Text>;
  }
};

export default StudentText;