import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row, Alert, Table, InputGroup, Form } from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import { Trash, Pencil } from "react-bootstrap-icons";
import { MDBInput } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSave} from "@fortawesome/free-regular-svg-icons"

function URISetter(main, id, sub, page) {
  return `/${main}/${id}/${sub}${page}`;
}

function AdminEnrollmentShow() {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const enrollment = JSON.parse(document.getElementById("data").getAttribute("enrollment"));
  const students = JSON.parse(document.getElementById("data").getAttribute("students"));
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState(null);
  const [deletePath, setDeletePath] = useState(null);
  const [rowEdit, setRowEdit] = useState(false)
  const [rowEditID, setRowEditID] = useState(null)
  const [studentID, setStudentID] = useState(0)
  const [editFormFirstName, setEditFormFirstName] = useState("")
  const [editFormLastName, setEditFormLastName] = useState("")
  const [editFormEmail, setEditFormEmail] = useState("")
  const [editFormPhone, setEditFormPhone] = useState("")

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

  function ShowDeleteModal(type, id) {
    if(type === enrollment){
      setDeletePath(`/admin/enrollments/${id}`);
      setDeleteMessage(`Are you sure you want to delete the enrollment in ${type.location} on ${type.date} at ${type.time}`);
    } else {
      setDeletePath(`/admin/enrollments/${enrollment.id}/students/${id}`);
      setDeleteMessage(`Are you sure you want to remove ${type.first_name} registered at ${enrollment.location} on ${enrollment.date} at ${enrollment.time}`);
    };
    setDisplayConfirmationModal(true);
  };

  function clickToEditRow(student, index) {
    setRowEdit(!rowEdit)
    setEditFormFirstName(student.first_name)
    setEditFormLastName(student.last_name)
    setEditFormEmail(student.email)
    setEditFormPhone(student.phone)
    setStudentID(student.id)
    setRowEditID(index)
  };

  const editForm = () => {
    return (
      <form id="editForm" action={`/admin/enrollments/${enrollment.id}/students/${studentID}`} method="post">
        <input type="hidden" name="authenticity_token" value={csrf_token} />
        <input type="hidden" name="_method" value="PATCH" />
        <input type="hidden" name="first_name" value={editFormFirstName} />
        <input type="hidden" name="last_name" value={editFormLastName} />
        <input type="hidden" name="email" value={editFormEmail} />
        <input type="hidden" name="phone" value={editFormPhone} />
      </form>
    )
  };


  function populateRow(rowEdit, rowEditID, student, index) {
    if(rowEdit === true && rowEditID === index) {
      return (
        <tr id={index} key={index}>
          <td>{index + 1}</td>
          <td><MDBInput type='text' value ={editFormFirstName} onChange={handleFirstNameChange}></MDBInput></td>
          <td><MDBInput type='text' value ={editFormLastName} onChange={handleLastNameChange}></MDBInput></td>
          <td><MDBInput type='text' value ={editFormEmail} onChange={handleEmailChange}></MDBInput></td>
          <td><MDBInput type='text' value ={editFormPhone} onChange={handlePhoneChange}></MDBInput></td>
          <td>
            <Button name="pen" style={{  outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent"}} onClick={() => clickToEditRow(student, index)}> <Pencil color="blue" /> </Button> &emsp;
            <Button name="save" style={{  outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent"}} type="submit" form={"editForm"}> <FontAwesomeIcon icon={faSave} color="blue"/> </Button> &emsp;
            <Button name="trash" style={{  outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent"}} onClick={() => ShowDeleteModal(student, student.id)}> <Trash color="red" /> </Button>
          </td>
        </tr>
      )
    } else {
      return (
        <tr id={index} key={index}>
          <td>{index + 1}</td>
          <td>{student.first_name}</td>
          <td>{student.last_name}</td>
          <td>{student.email}</td>
          <td>{student.phone}</td>
          <td>
            <Button name="pen" style={{  outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent"}} onClick={() => clickToEditRow(student, index)}> <Pencil color="blue" /> </Button> &emsp;
            <Button name="save" style={{  outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent"}} disabled={true}> <FontAwesomeIcon icon={faSave} color="lightgrey"/> </Button> &emsp;
            <Button name="trash" style={{  outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent"}} onClick={() => ShowDeleteModal(student, student.id)}> <Trash color="red" /> </Button>
          </td>
        </tr>
      );
    };
  };


  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false);
  };

  const submitDelete = () => {
    setDisplayConfirmationModal(false);
  };

  const endTime = (time) => {
    let endHour = parseInt(time.slice(0,2)) + 3
    const meridiemSwitch = {
      "P": "A",
      "A": "P"
    };
    if(endHour > 15) {
      endHour -= 12
      return `0${endHour}${time.slice(-6)}`
    } else if(endHour > 12 && endHour <= 15) {
      endHour -= 12
      return (('0'+`${endHour}`).slice(-2)+`${time.slice(2,6)}`+`${meridiemSwitch[time[6]]}M`)
    } else if(endHour = 12) {
      return (('0'+`${endHour}`).slice(-2)+`${time.slice(2,6)}`+`${meridiemSwitch[time[6]]}M`)
    } else { 
      return `${('0'+ (parseInt(time.slice(0,2))+3)).slice(-2)}${time.slice(-6)}`
    }
  };

  const showEnrollment = (enrollment, students) => (
    <Row>
      <Card className="enrollment-card card mx-auto px-0" bg="light" text="dark" border="dark" style={{ width: "40%", height: "50%" }}>
        <Card.Header style={{ textAlign: "center"}}>
          <a href={"/admin/enrollments"}>Enrollment Index</a> &emsp;
          <a href={"/admin/enrollments/new"}>New Enrollment Session</a>
        </Card.Header>
        <Card.Body style={{ textAlign: "center" }}>
          <Card.Title>{enrollment.location} — {enrollment.date}</Card.Title>
          <Card.Subtitle>{enrollment.time} — {endTime(enrollment.time)}</Card.Subtitle>
          <br />
          <Card.Text>Student Limit: {enrollment.student_limit}</Card.Text>
          <Card.Text>Number of Students: {students.length}</Card.Text>
          <Row xs={2} md={2}>
            <Button href={URISetter("admin/enrollments", enrollment.id, "edit", "")} size="sm" variant="outline-dark">Edit Session</Button>
            <Button size="sm" variant="outline-dark" onClick={() => ShowDeleteModal(enrollment, enrollment.id)}>Delete Session</Button>
          </Row>
        </Card.Body>
      </Card>
    </Row>
  );

  const enrolledStudents = (students) => (
    <div>
      {editForm()}
      <h4>Enrolled Students:</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
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
      {showEnrollment(enrollment, students)}
      {enrolledStudents(students)}
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </div>
  );
}

export default AdminEnrollmentShow;
