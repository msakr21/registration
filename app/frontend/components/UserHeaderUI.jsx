import React from 'react';
import { Card } from 'react-bootstrap';

function UserHeaderUI(userType) {
  if (userType === "admin") {
    return <Card.Header style={{ textAlign: "center" }}><a href={"/admin/enrollments"}>Enrollment Index</a> &emsp; <a href={"/admin/enrollments/new"}>New Enrollment Session</a></Card.Header>;
  }
};

export default UserHeaderUI;