import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row} from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import DisplayDeleteSuccess from '~/components/DisplayDeleteSuccess.jsx';
import NewStudentError from '~/components/NewStudentError.jsx';
import UserHeaderUI from '~/components/UserHeaderUI.jsx';
import ListLocationEnrollments from '~/components/ListLocationEnrollments.jsx';

function EnrollmentIndex(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const mayEnrollments = JSON.parse(document.getElementById("data").getAttribute("may_enrollments"));
  const sheridanEnrollments = JSON.parse(document.getElementById("data").getAttribute("sheridan_enrollments"));
  const smokyEnrollments = JSON.parse(document.getElementById("data").getAttribute("smoky_enrollments"));
  const newStudentError = document.getElementById("data").getAttribute("new_student_error");
  const deleteConfirmation = document.getElementById("data").getAttribute("delete_confirmation");
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deletePath, setDeletePath] = useState(null);

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  return (
    <Card border="light">
      {DisplayDeleteSuccess(deleteConfirmation)}
      {NewStudentError(newStudentError)}
      {UserHeaderUI(props.admin)}
      <Card.Title style={{ textAlign: "center", margin: "2%" }}>Eloise May Enrollment Sessions:</Card.Title>
      <Row xs={2} md={3} className="g-4 justify-content-center">
        {ListLocationEnrollments(props.admin, mayEnrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
      </Row>
      <Card.Title style={{ textAlign: "center", margin: "2%" }}>Sheridan Enrollment Sessions:</Card.Title>
      <Row xs={2} md={3} className="g-4 justify-content-center">
        {ListLocationEnrollments(props.admin, sheridanEnrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
      </Row>
      <Card.Title style={{ textAlign: "center", margin: "2%" }}>Smoky Hill Enrollment Sessions:</Card.Title>
      <Row xs={2} md={3} className="g-4 justify-content-center">
        {ListLocationEnrollments(props.admin, smokyEnrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
      </Row>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </Card>
  );
};

export default EnrollmentIndex;