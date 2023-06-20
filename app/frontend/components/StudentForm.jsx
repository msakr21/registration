import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Card, Row, Col } from "react-bootstrap";


function NewStudent(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const enrollment_id = document.getElementById("data").getAttribute("enrollmentID")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const uri = `${props.admin}/enrollments/${enrollment_id}/students`

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

  return (
    <Row style={{ height: "95vh" }}>
      <Col xs={12} md={8} lg={6} xl={4} className="mx-auto">
        <Card className="card mx-auto my-auto">
          <Card.Title className="text-center" style={{ marginTop: "25px", marginBottom: "20px" }}>
            Please fill the form below:
          </Card.Title>
          <Form action={uri} method="post">
            <input type="hidden" name="authenticity_token" value={csrf_token} />
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control type="text" placeholder="Please Enter First Name" name="first_name" value={firstName} onChange={handleFirstNameChange} />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control type="text" placeholder="Please Enter Last Name" name="last_name" value={lastName} onChange={handleLastNameChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="text" placeholder="Please Enter Email" name="email" value={email} onChange={handleEmailChange} />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control type="text" placeholder="Please Enter Phone Number" name="phone" value={phone} onChange={handlePhoneChange} />
            </Form.Group>
            <div className="text-center">
              <Button size="sm" variant="outline-primary" style={{ marginBottom: "25px" }} type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}

export default NewStudent;
