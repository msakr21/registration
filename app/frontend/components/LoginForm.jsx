import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Form, Card, Row} from 'react-bootstrap';


function LoginForm() {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const [userName, setUserName] = useState("")
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <Row style={{ height: "95vh" }}>
      <Card className="card mx-auto my-auto" style={{ width: "30%" }}>
      <Card.Title className="text-center" style={{ fontWeight: "bold", marginTop: "25px", marginBottom: "20px" }}>
          Please Login to Continue
        </Card.Title>
        <Form action="/admin/sessions/create" method="post">
          <input type="hidden" name="authenticity_token" value={csrf_token} />
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" name="username" value={userName} onChange={handleUserNameChange}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" name="password"/>
          </Form.Group>
          <div className="text-center">
            <Button size="sm" variant="outline-primary" style={{ margin: "25px" }} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Row>
  );
};

export default LoginForm;