import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Button, Form, Card, Row} from 'react-bootstrap';


const LoginForm = () => {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  return (
    <Row style={{ height: "95vh" }}>
      <Card className="card mx-auto my-auto" style={{ width: "30%" }}>
      <Card.Title className="text-center" style={{ fontWeight: "bold", marginTop: "25px", marginBottom: "20px" }}>
          Please Login to Continue
        </Card.Title>
        <Form id="Login" action='/admin/sessions/create' method="post">
          <input type="hidden" name="authenticity_token" value={csrf_token} />
          <input type="hidden" name="_method" value="POST" />
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Enter Username"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <div className="text-center">
            <Button size="sm" variant="outline-primary" style={{ margin: "25px" }}>
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </Row>
  );
};

export default LoginForm;