import React from 'react';
import { Button } from "react-bootstrap";
import ShowDeleteModal from '~/components/ShowDeleteModal.jsx';
import { Trash, Pencil } from "react-bootstrap-icons";
import { MDBInput } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from "@fortawesome/free-regular-svg-icons";

function TableRows(rowEdit, formValue, student, index, handleChange, enrollment, setRowEdit, setFormValue, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) {
  function clickToEditRow(student, index) {
    setRowEdit(!rowEdit);
    setFormValue({
      firstName: student.first_name,
      lastName: student.last_name,
      email: student.email,
      phone: student.phone,
      language: student.language,
      rowID: index,
      studentID: student.id
    })
  };

  if (rowEdit === true && formValue.rowID === index) {
    return (
      <tr id={index} key={index}>
        <td className="text-center align-middle">{index + 1}</td>
        <td><MDBInput name="firstName" className="text-center align-middle" type='text' onChange={handleChange} value={formValue.firstName}></MDBInput></td>
        <td><MDBInput name="lastName"className="text-center align-middle" type='text' onChange={handleChange} value={formValue.lastName}></MDBInput></td>
        <td><MDBInput name="email" className="text-center align-middle" type='text' onChange={handleChange} value={formValue.email}></MDBInput></td>
        <td><MDBInput name="phone" className="text-center align-middle" type='text' onChange={handleChange} value={formValue.phone}></MDBInput></td>
        <td><MDBInput name="language" className="text-center align-middle" type='text' onChange={handleChange}  value={formValue.language}></MDBInput></td>
        <td>
          <Button name="pen" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => clickToEditRow(student, index)}> <Pencil color="blue" /> </Button>
          <Button name="save" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} type="submit" form={"editForm"}> <FontAwesomeIcon icon={faSave} color="blue" /> </Button>
          <Button name="trash" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => ShowDeleteModal(student, student.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, enrollment)}> <Trash color="red" /> </Button>
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
          <Button name="trash" style={{ outline: "none", border: "0", boxShadow: "none", backgroundColor: "transparent" }} onClick={() => ShowDeleteModal(student, student.id, setDeletePath, setDeleteMessage, setDisplayConfirmationModal, enrollment)}> <Trash color="red" /> </Button>
        </td>
      </tr>
    );
  };
};

export default TableRows;