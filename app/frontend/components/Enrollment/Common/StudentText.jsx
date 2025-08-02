import React from 'react';
import { Card } from 'react-bootstrap';

function StudentText(capacity, enrollment, locale) {
  const sessionFull = document.getElementById("registration_closed").getAttribute("content");
  const availableSeats = document.getElementById("available_space").getAttribute("content");
  let calculation = enrollment.student_limit - enrollment.students
  if (locale === "ar") {
    calculation = calculation.toString().replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
  }
  if (capacity) {
    return <Card.Text>{sessionFull}</Card.Text>;
  } else {
    return <Card.Text>{availableSeats} {calculation}</Card.Text>;
  }
}

export default StudentText;
