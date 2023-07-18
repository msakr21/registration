import React, { useState } from 'react';
import DeleteConfirmation from '~/components/DeleteConfirmation.jsx';
import ShowEnrollmentCard from '~/components/ShowEnrollmentCard.jsx';
import EnrolledStudents from '~/components/EnrolledStudents.jsx'; 

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

  return (
    <div style={{ height: "95vh" }}>
      <div id='printable' style={{ height: "95vh" }}>
        {ShowEnrollmentCard(enrollment, students, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
        {EnrolledStudents(students, rowEdit, enrollment, formValue, csrf_token, handleChange, setRowEdit, setFormValue, setDeletePath, setDeleteMessage, setDisplayConfirmationModal)}
      </div>
      <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} path={deletePath} message={deleteMessage} authenticity={csrf_token} />
    </div>
  );
};

export default AdminEnrollmentShow;