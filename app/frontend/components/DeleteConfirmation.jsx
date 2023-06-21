import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";

function DeleteConfirmation(props) {
  return (
    <Modal show={props.showModal} onHide={props.hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-danger">{props.message}</div>
      </Modal.Body>
      <Modal.Footer>
        <Form action={props.path} method="post">
          <input type="hidden" name="authenticity_token" value={props.authenticity} />
          <input type="hidden" name="_method" value="DELETE" />
          <Button variant="danger" type="submit" onClick={props.confirmModal}>
            Delete
          </Button>
        </Form>
        <Button variant="default" onClick={props.hideModal}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteConfirmation;
