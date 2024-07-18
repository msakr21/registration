function StudentParamCheck(studentParams, param) {
  if (studentParams === null) {
    return null
  } else {
    return studentParams[`${param}`]
  };
}

export default StudentParamCheck;