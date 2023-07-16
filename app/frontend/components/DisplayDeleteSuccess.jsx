import React from 'react';
import { Alert } from "react-bootstrap";

function DisplayDeleteSuccess(deleteConfirmation) {
  if (deleteConfirmation === 'true') {
    return <Alert variant="success" dismissible>"The enrollment was deleted successfully."</Alert>;
  } else if (deleteConfirmation === 'error') {
    return <Alert variant="danger" dismissible>"Can't delete session with registered students. Please remove students first."</Alert>;
  }
}

export default DisplayDeleteSuccess;