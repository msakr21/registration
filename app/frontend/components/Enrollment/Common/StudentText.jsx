import React from 'react';
import { Card } from 'react-bootstrap';

function StudentText(capacity, enrollment) {
  const sessionFull = document.getElementById("registration_closed").getAttribute("content");
  const availableSeats = document.getElementById("available_space").getAttribute("content");
  const locale = document.getElementById("data").getAttribute("locale");
  let calculation = enrollment.applicant_limit - enrollment.applicants
  if (locale === "ar") {
    const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    calculation = calculation.toString().replace(/\d/g, d =>  '٠١٢٣٤٥٦٧٨٩'[d])
  }
  if (capacity) {
    return <Card.Text>{sessionFull}</Card.Text>;
  } else {
    return <Card.Text>{availableSeats} {calculation}</Card.Text>;
  }
}

export default StudentText;
