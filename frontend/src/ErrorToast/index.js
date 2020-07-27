import React from "react";
import moment from "moment";
import { Toast, Alert } from "react-bootstrap";

function ErrorToast({ message, errors, setErrors, errorId }) {
  return (
    <Toast
      style={{ position: 'absolute', bottom: 20, right: 20, }}
      onClose={() => setErrors(errors.filter((err, i) => i !== errorId))}
      delay={10000}
      autohide
    >
      <Toast.Header>
        <strong className="mr-auto">error </strong>
        <small className="ml-2">{moment(new Date()).fromNow()}.</small>
      </Toast.Header>
      <Toast.Body>
        <Alert variant="warning">{message}</Alert>
      </Toast.Body>
    </Toast>
  )
}

export default ErrorToast;