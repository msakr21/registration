import React, { useState } from 'react';
import { Button, Card, Row, Table } from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import endTime from '~/components/EndTime.js'
import showDeleteModal from '~/components/showDeleteModal.js';
import TableEditForm from '~/components/TableEditForm.jsx';
import TableRows from '~/components/TableRows.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import Print from 'print-js';

function AdminEnrollmentShow() {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const enrollment = JSON.parse(document.getElementById("data").getAttribute("enrollment"));
  const students = JSON.parse(document.getElementById("data").getAttribute("students"));
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deletePath, setDeletePath] = useState(null);
  const [rowEdit, setRowEdit] = useState(false);

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    language: "",
    rowID: null,
    studentID: 0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  const showEnrollment = (enrollment, students) => (
    <Row>
      <Card id="enrollmentCard" className="enrollment-card card mx-auto px-0" bg="light" text="dark" border="dark" style={{ width: "40%", height: "50%" }}>
        <Card.Header style={{ textAlign: "center" }}>
          <a href={"/admin/enrollments"}>Enrollment Index</a> &nbsp;&nbsp;
          <a href={"/admin/enrollments/new"}>New Enrollment Session</a> &nbsp;&nbsp;
          <Button name="print" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => {Print({ printable: 'printable', type: 'html', scanStyles: false, css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'})}}> <FontAwesomeIcon icon={faPrint} color="grey" /> </Button>
        </Card.Header>
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{enrollment.location} — {enrollment.date}</Card.Title>
          <Card.Subtitle>{enrollment.time} — {endTime(enrollment.time)}</Card.Subtitle>
          <br />
          <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
          <Card.Text>Number of Students: {students.length}</Card.Text>
          <Row xs={2} md={2}>
            <Button href={`/admin/enrollments/${enrollment.id}/edit`} size="sm" variant="outline-dark">Edit Session</Button>
            <Button size="sm" variant="outline-dark" onClick={() => showDeleteModal(enrollment, enrollment.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}>Delete Session</Button>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );

  const enrolledStudents = (students) => (
    <div>
      {TableEditForm(enrollment, formValue, csrf_token)}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center" width="4%" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>#</th>
            <th className="text-center" width="16.8%">First Name</th>
            <th className="text-center" width="22.8%">Last Name</th>
            <th className="text-center" width="23.8%">Email</th>
            <th className="text-center" width="10%">Phone</th>
            <th className="text-center" width="11%">Language</th>
            <th className="text-center" width="12.6%" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            TableRows(rowEdit, formValue, student, index, handleChange, enrollment, setRowEdit, setFormValue, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)
          ))}
        </tbody>
      </Table>
    </div>
  );

  return (
    <div style={{ height: "95vh" }}>
      <div id='printable' style={{ height: "95vh" }}>
        {showEnrollment(enrollment, students)}
        {enrolledStudents(students)}
      </div>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </div>
  );
}

export default AdminEnrollmentShow;