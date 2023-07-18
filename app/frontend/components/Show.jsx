import React, { useState } from 'react';
import { Table } from "react-bootstrap";
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import TableEditForm from '~/components/TableEditForm.jsx';
import TableRows from '~/components/TableRows.jsx';
import ShowEnrollmentCard from '~/components/ShowEnrollmentCard.jsx';

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
        {ShowEnrollmentCard(enrollment, students, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
        {enrolledStudents(students)}
      </div>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </div>
  );
};

export default AdminEnrollmentShow;