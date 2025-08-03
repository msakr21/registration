import React from 'react';
import { Table } from "react-bootstrap";
import TableEditForm from '~/components/Enrollment/AdminOnly/ShowPage/TableEditForm.jsx';
import TableRows from '~/components/Enrollment/AdminOnly/ShowPage/TableRows.jsx';

const EnrolledStudents = (students, rowEdit, enrollment, formValue, csrf_token, handleChange, setRowEdit, setFormValue, setDeletePath, setDeleteMessage, setDisplayConfirmationModal) => (
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
          <th className="text-center" width="10%">Interpretation</th>
          <th className="text-center" width="11%">Language</th>
          <th className="text-center" width="10%">Level</th>
          <th className="text-center" width="12.6%" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          TableRows(
            rowEdit,
            formValue,
            student,
            index,
            handleChange,
            enrollment,
            setRowEdit,
            setFormValue,
            setDeletePath,
            setDeleteMessage,
            setDisplayConfirmationModal
          )
        ))}
      </tbody>
    </Table>
  </div>
);

export default EnrolledStudents;
