import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Card, Row } from 'react-bootstrap';
import UserHeaderUI from '~/components/Enrollment/UserHeaderUI.jsx';

function EnrollmentForm(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const enrollments = JSON.parse(document.getElementById("data").getAttribute("enrollments"));
  const allStudents = JSON.parse(document.getElementById("data").getAttribute("allStudents"));
  const [location, setLocation] = useState(props.location);
  const [startTime, setStartTime] = useState(props.startTime);
  const [endTime, setEndTime] = useState(props.endTime);
  const [students, setStudents] = useState(props.students || 30);
  const method = props.method;
  const path = props.path;

  const handleStartTimeChange = (newValue) => {
    setStartTime(newValue);
  };

  const handleEndTimeChange = (newValue) => {
    setEndTime(newValue);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleStudentsChange = (event) => {
    setStudents(event.target.value);
  };

  function RenderField(method) {
    if (method === "patch") {
      return <input type="hidden" name="_method" value="PATCH" />;
    }
  }

  //tweak method above to take all caps so it can be reusable for patch and delete and split into own component

  return (
    <div>{UserHeaderUI(props.admin, enrollments, allStudents)}
    <Row style={{ height: "95vh" }}>
      <Card className="card mx-auto my-auto" style={{ width: "40%" }}>
        <Card.Title style={{ marginTop: "25px", marginBottom: "20px" }} className="text-center">Please fill the form below:</Card.Title>
        <Form action={path} method="post">
          <input type="hidden" name="authenticity_token" value={csrf_token} />
          {RenderField(method)}
          <input type="hidden" name="location" value={location} />
          <input type="hidden" name="start_time" value={startTime} />
          <input type="hidden" name="end_time" value={endTime} />
          <div id="location">
            <Form.Label>Location:</Form.Label>
            <Form.Select name="location" value={location} onChange={handleLocationChange}>
              <option value="Eloise May">Eloise May</option>
              <option value="Sheridan">Sheridan</option>
              <option value="Smoky Hill">Smoky Hill</option>
            </Form.Select>
          </div>
          <br />
          <div>
            <Form.Group className="mb-3" controlId="formStudentLimit">
              <Form.Label>Maximum number of students:</Form.Label>
              <Form.Control type="number" placeholder="Enter student limit" name="student_limit" value={students} onChange={handleStudentsChange} />
            </Form.Group>
          </div>
          <br />
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Please select a Date"
                  inputFormat="MM/dd/yyyy"
                  value={startTime}
                  onChange={handleStartTimeChange}
                  slotProps={{ textField: { variant: 'outlined' } }}
                />
                <TimePicker
                  label="Please select a Start Time"
                  name="TimePicker"
                  value={startTime}
                  onChange={handleStartTimeChange}
                  slotProps={{ textField: { variant: 'outlined' } }}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <br />
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Please select a Date"
                  inputFormat="MM/dd/yyyy"
                  value={endTime}
                  onChange={handleEndTimeChange}
                  slotProps={{ textField: { variant: 'outlined' } }}
                />
                <TimePicker
                  label="Please select an End Time"
                  name="TimePicker"
                  value={endTime}
                  onChange={handleEndTimeChange}
                  slotProps={{ textField: { variant: 'outlined' } }}
                />
              </Stack>
            </LocalizationProvider>
          </div>
          <br />
          <div className="text-center">
            <Button size="sm" variant="outline-primary" style={{ marginBottom: "25px" }} type="submit">Submit</Button>
          </div>
        </Form>
      </Card>
    </Row>
    </div>
  );
}

export default EnrollmentForm;
