import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import DeleteConfirmation from '~/components/Enrollment/Common/Modals/DeleteConfirmation.jsx';
import DisplayDeleteSuccess from '~/components/Enrollment/Common/Modals/DisplayDeleteSuccess.jsx';
import UserHeaderUI from '~/components/Enrollment/UserHeaderUI.jsx';
import ListLocationEnrollments from '~/components/Enrollment/ListLocationEnrollments.jsx';

function EnrollmentIndex(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const students = JSON.parse(document.getElementById("data").getAttribute("students"));
  const mayEnrollments = JSON.parse(document.getElementById("data").getAttribute("may_enrollments"));
  const sheridanEnrollments = JSON.parse(document.getElementById("data").getAttribute("sheridan_enrollments"));
  const smokyEnrollments = JSON.parse(document.getElementById("data").getAttribute("smoky_enrollments"));
  const branch = document.getElementById("data").getAttribute("branch");
  const deleteConfirmation = document.getElementById("data").getAttribute("delete_confirmation");
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deletePath, setDeletePath] = useState(null);
  const locale = document.getElementById("locale").getAttribute("content");
  const branchTitles = JSON.parse(document.getElementById("title").getAttribute("content"));
  const capacityFull = document.getElementById("data").getAttribute("capacity_full");
  const thanks = document.getElementById("thanks").getAttribute("content");
  const registrationFull = document.getElementById("full").getAttribute("content");
  const here = document.getElementById("here").getAttribute("content");
  let textDirection = "ltr"
  if (locale === "ar") {
    textDirection = "rtl"
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };
  if (props.admin === "admin") {
    const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
    return (
      <Card border="light" style={{direction: textDirection}}>
        {DisplayDeleteSuccess(deleteConfirmation)}
        {UserHeaderUI(props.admin, enrollments, students)}
        <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>Eloise May Library Enrollment Sessions:</Card.Title>
        <Row xs={2} md={3} className="g-4 justify-content-center">
          {ListLocationEnrollments(props.admin, mayEnrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale)}
        </Row>
        <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>Sheridan Library Enrollment Sessions:</Card.Title>
        <Row xs={2} md={3} className="g-4 justify-content-center">
          {ListLocationEnrollments(props.admin, sheridanEnrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale)}
        </Row>
        <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>Smoky Hill Library Enrollment Sessions:</Card.Title>
        <Row xs={2} md={3} className="g-4 justify-content-center">
          {ListLocationEnrollments(props.admin, smokyEnrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale)}
        </Row>
        <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
      </Card>
    );
  } else {
    const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
    const branchEnrollments = JSON.parse(enrollments[branch])
    const title = branchTitles[branch]
    if (capacityFull === "false") {
      return (
        <Card border="light" style={{direction: textDirection}}>
          {DisplayDeleteSuccess(deleteConfirmation)}
          {UserHeaderUI(props.admin, branchEnrollments, students)}
          <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>{title}</Card.Title>
          <Row xs={2} md={3} className="g-4 justify-content-center">
            {ListLocationEnrollments(props.admin, branchEnrollments, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, locale)}
          </Row>
          <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
        </Card>
      );
    } else if (capacityFull === "true") {
      return (
        <Card border="light" style={{direction: textDirection}}> 
          {DisplayDeleteSuccess(deleteConfirmation)}
          {UserHeaderUI(props.admin, branchEnrollments, students)}
          <Card.Title style={{ textDecorationLine: "underline", fontSize: "28px", fontWeight: "bold", textAlign: "center", margin: "2%" }}>{title}</Card.Title>
          <Row xs={1} md={2} className="g-4 justify-content-center">
            <Col>
              <Card className="enrollment-card" bg="light" text="dark" border="dark">
                <Card.Body style={{ textAlign: "center" }}>
                  <p>{thanks}</p>
                  <p>
                  {registrationFull + " "}
                  {<a href="https://docs.google.com/forms/d/e/1FAIpQLSdPIuJc4zMUn00dytDAJjz844WPff6WE6NktB32Z1PWs_Y51g/viewform">{here}</a>}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
        </Card>
      );
    }
  }
}

export default EnrollmentIndex;
