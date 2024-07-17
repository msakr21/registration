import React from 'react';
import { Alert } from 'react-bootstrap';
import ErrorHandling from '~/components/Enrollment/Common/ErrorHandling.jsx';

function NewStudentFormError(errors) {
  if (errors != null) {
    return Object.keys(errors).map((errorName) => (
      <Alert variant="danger" dismissible>
        {(ErrorHandling(errorName))}
      </Alert>
      )
    )
  }
}

export default NewStudentFormError;
