import React, { useState } from 'react';
import { Button, Card, Row, Table } from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import endTime from '~/components/EndTime.js'
import { Trash, Pencil } from "react-bootstrap-icons";
import { MDBInput } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from "@fortawesome/free-regular-svg-icons";
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
  const [rowEditID, setRowEditID] = useState(null);
  const [studentID, setStudentID] = useState(0);
  const [editFormFirstName, setEditFormFirstName] = useState("");
  const [editFormLastName, setEditFormLastName] = useState("");
  const [editFormEmail, setEditFormEmail] = useState("");
  const [editFormPhone, setEditFormPhone] = useState("");
  const [editFormLanguage, setEditFormLanguage] = useState("");

  const handleFirstNameChange = (event) => {
    setEditFormFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setEditFormLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEditFormEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setEditFormPhone(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setEditFormLanguage(event.target.value);
  };

  function ShowDeleteModal(type, id) {
    if (type === enrollment) {
      setDeletePath(`/admin/enrollments/${id}`);
      setDeleteMessage(`Are you sure you want to delete the enrollment in ${type.location} on ${type.date} at ${type.time}`);
    } else {
      setDeletePath(`/admin/enrollments/${enrollment.id}/students/${id}`);
      setDeleteMessage(`Are you sure you want to remove ${type.first_name} registered at ${enrollment.location} on ${enrollment.date} at ${enrollment.time}`);
    }
    setDisplayConfirmationModal(true);
  }

  function clickToEditRow(student, index) {
    setRowEdit(!rowEdit);
    setEditFormFirstName(student.first_name);
    setEditFormLastName(student.last_name);
    setEditFormEmail(student.email);
    setEditFormPhone(student.phone);
    setEditFormLanguage(student.language);
    setStudentID(student.id);
    setRowEditID(index);
  }

  const editForm = () => {
    return (
      <form id="editForm" action={`/admin/enrollments/${enrollment.id}/students/${studentID}`} method="post">
        <input type="hidden" name="authenticity_token" value={csrf_token} />
        <input type="hidden" name="_method" value="PATCH" />
        <input type="hidden" name="first_name" value={editFormFirstName} />
        <input type="hidden" name="last_name" value={editFormLastName} />
        <input type="hidden" name="email" value={editFormEmail} />
        <input type="hidden" name="phone" value={editFormPhone} />
        <input type="hidden" name="language" value={editFormLanguage} />
      </form>
    );
  };

  function populateRow(rowEdit, rowEditID, student, index) {
    if (rowEdit === true && rowEditID === index) {
      return (
        <tr id={index} key={index}>
          <td className="text-center align-middle">{index + 1}</td>
          <td><MDBInput className="text-center align-middle" type='text' value={editFormFirstName} onChange={handleFirstNameChange}></MDBInput></td>
          <td><MDBInput className="text-center align-middle" type='text' value={editFormLastName} onChange={handleLastNameChange}></MDBInput></td>
          <td><MDBInput className="text-center align-middle" type='text' value={editFormEmail} onChange={handleEmailChange}></MDBInput></td>
          <td><MDBInput className="text-center align-middle" type='text' value={editFormPhone} onChange={handlePhoneChange}></MDBInput></td>
          <td><MDBInput className="text-center align-middle" type='text' value={editFormLanguage} onChange={handleLanguageChange}></MDBInput></td>
          <td>
            <Button name="pen" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => clickToEditRow(student, index)}> <Pencil color="blue" /> </Button>
            <Button name="save" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} type="submit" form={"editForm"}> <FontAwesomeIcon icon={faSave} color="blue" /> </Button>
            <Button name="trash" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => ShowDeleteModal(student, student.id)}> <Trash color="red" /> </Button>
          </td>
        </tr>
      );
    } else {
      return (
        <tr id={index} key={index} >
          <td className="text-center align-middle" style={{ padding: "0px" }}>{index + 1}</td>
          <td className="text-center align-middle" style={{ padding: "0px" }}>{student.first_name}</td>
          <td className="text-center align-middle" style={{ padding: "0px" }}>{student.last_name}</td>
          <td className="text-center align-middle" style={{ padding: "0px" }}>{student.email}</td>
          <td className="text-center align-middle" style={{ padding: "0px" }}>{student.phone}</td>
          <td className="text-center align-middle" style={{ padding: "0px" }}>{student.language}</td>
          <td className="text-center align-middle" style={{ padding: "0px" }}>
            <Button name="pen" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => clickToEditRow(student, index)}> <Pencil color="blue" /> </Button>
            <Button name="save" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} disabled={true}> <FontAwesomeIcon icon={faSave} color="lightgrey" /> </Button>
            <Button name="trash" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => ShowDeleteModal(student, student.id)}> <Trash color="red" /> </Button>
          </td>
        </tr>
      );
    }
  }

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
            <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(enrollment, enrollment.id)}>Delete Session</Button>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );

  const enrolledStudents = (students) => (
    <div>
      {editForm()}
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
            populateRow(rowEdit, rowEditID, student, index)
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
