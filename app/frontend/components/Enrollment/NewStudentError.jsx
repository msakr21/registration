import React from 'react';
import { Alert } from "react-bootstrap";

function NewStudentError(newStudentError) {
  if (newStudentError === 'true') {
    return <Alert variant="danger" dismissible>"This session is no longer available."</Alert>;
  }
}

export default NewStudentError;