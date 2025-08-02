import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Row } from "react-bootstrap";
import NewStudentFormError from '../Enrollment/Common/NewStudentFormError';
import StudentParamCheck from '../Enrollment/Common/StudentParamCheck';
import UserHeaderUI from '~/components/Enrollment/UserHeaderUI.jsx';

function NewStudentForm(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const enrollment_id = document.getElementById("data").getAttribute("enrollmentID");
  const locale = document.getElementById("locale").getAttribute("content");
  const mobile = document.getElementById("data").getAttribute("mobile");
  const firstNameDisplay = document.getElementById("first_name").getAttribute("content");
  const firstNamePlaceholder = document.getElementById("first_name_placeholder").getAttribute("content");
  const lastNameDisplay = document.getElementById("last_name").getAttribute("content");
  const lastNamePlaceholder = document.getElementById("last_name_placeholder").getAttribute("content");
  const emailDisplay = document.getElementById("email").getAttribute("content");
  const emailPlaceholder = document.getElementById("email_placeholder").getAttribute("content");
  const phoneDisplay = document.getElementById("phone").getAttribute("content");
  const phoneNumberPlaceholder = document.getElementById("phone_number_placeholder").getAttribute("content");
  const interpreterQuestion = document.getElementById("interpreter_question").getAttribute("content");
  const affirmative = document.getElementById("affirmative").getAttribute("content");
  const languageQuestion = document.getElementById("language_question").getAttribute("content");
  const languageDisplay = document.getElementById("language_display").getAttribute("content");
  const interpretingNote = document.getElementById("interpreting_note").getAttribute("content");
  const levelQuestion = document.getElementById("level_question").getAttribute("content");
  const firstOption = document.getElementById("first_option").getAttribute("content");
  const secondOption = document.getElementById("second_option").getAttribute("content");
  const thirdOption = document.getElementById("third_option").getAttribute("content");
  const topMessage = document.getElementById("top_message").getAttribute("content");
  const submit = document.getElementById("submit").getAttribute("content");
  const errors = JSON.parse(document.getElementById("data").getAttribute("errors"));
  const studentParams = JSON.parse(document.getElementById("data").getAttribute("student_params"));
  const [firstName, setFirstName] = useState(StudentParamCheck(studentParams, "first_name") || "");
  const [lastName, setLastName] = useState(StudentParamCheck(studentParams, "last_name") || "");
  const [email, setEmail] = useState(StudentParamCheck(studentParams, "email") || "");
  const [phone, setPhone] = useState(StudentParamCheck(studentParams, "phone")|| "");
  const [isChecked, setIsChecked] = useState(false);
  const [level, setLevel] = useState(StudentParamCheck(studentParams, "level") || "Beginner");
  const [language, setLanguage] = useState(StudentParamCheck(studentParams, "language") || "");
  let width = "4%"
  console.log(affirmative)

  let textDirection = "ltr"
  const interpretationNeeded = {
    false: false,
    true: true
  }

  if (locale === "ar") {
    textDirection = "rtl"
  }

  if (mobile === "true") {
    width = "10%"
  }

  const uri = `${props.slash}${props.admin}/enrollments/${enrollment_id}/students`;

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(prevState => !prevState);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  return (
    <div>{UserHeaderUI(props.admin)}
    <Row style={{ height: "95vh", direction: textDirection }}>
      {NewStudentFormError(errors)}
      <Card className="card mx-auto my-auto" style={{ width: "60%" }}>
        <Card.Title className="text-center" style={{ marginTop: "25px", marginBottom: "20px" }}>
          {topMessage}
        </Card.Title>
        <Form action={uri} method="post">
          <input type="hidden" name="authenticity_token" value={csrf_token} />
          <input type="hidden" name="locale" value={locale} />
          <input type="hidden" name="interpretation" value={interpretationNeeded[isChecked]} />
          <Form.Group controlId="formFirstName">
            <Form.Label>{firstNameDisplay}</Form.Label>
            <Form.Control type="text" placeholder={firstNamePlaceholder} name="first_name" maxLength="100" value={firstName} onChange={handleFirstNameChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formLastName">
            <Form.Label>{lastNameDisplay}</Form.Label>
            <Form.Control type="text" placeholder={lastNamePlaceholder} name="last_name" maxLength="100" value={lastName} onChange={handleLastNameChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formEmail">
            <Form.Label>{emailDisplay}</Form.Label>
            <Form.Control type="text" placeholder={emailPlaceholder} name="email" value={email} maxLength="100" onChange={handleEmailChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formPhone">
            <Form.Label>{phoneDisplay}</Form.Label>
            <Form.Control type="text" placeholder={phoneNumberPlaceholder} name="phone" value={phone} onChange={handlePhoneChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="formInterpretingNeeded">
            <Form.Label>{interpreterQuestion}</Form.Label>
            <Form.Check type="Checkbox" id="interpreting_checkbox" style={{ width: width}} name="interpreting_checkbox" label={affirmative} checked={isChecked} onChange={handleCheckboxChange}/>
            {interpretingNote}
          </Form.Group>

          <br />
          <Form.Group controlId="formLanguage">
            <Form.Label>{languageQuestion}</Form.Label>
            <Form.Control type="text" placeholder={languageDisplay} name="language" maxLength="100" value={language} onChange={handleLanguageChange} />
          </Form.Group>
          <br />
          <Form.Group controlId="level">
            <Form.Label>{levelQuestion}</Form.Label>
            <Form.Select name="level" value={level} onChange={handleLevelChange}>
              <option value="Beginner">{firstOption}</option>
              <option value="Intermediate">{secondOption}</option>
              <option value="Advanced">{thirdOption}</option>
            </Form.Select>
          </Form.Group>
          <br />
          <div className="text-center">
            <Button size="sm" variant="outline-primary" style={{ margin: "25px" }} type="submit">
              {submit}
            </Button>
          </div>
        </Form>
      </Card>
    </Row>
    </div>
  );
}

export default NewStudentForm;