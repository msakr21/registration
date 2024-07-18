function ErrorHandling(errorName) {
  var text = ""
  if (errorName === "first_name") {
    text += "First name can not be blank."
  } else if (errorName === "last_name") {
    text += "Last name can not be blank. "
  } else if (errorName === "phone") {
    text += "Please enter valid US number. "
  } else if (errorName === "email") {
    text += "Please enter valid email. "
  } else if (errorName === "base") {
    text += "Please enter either phone number and/or email address. "
  } else if (errorName === "language") {
    text += "Language can not be blank. "
  }

  return text
}

export default ErrorHandling;