import React from 'react';
import {Button, Navbar} from 'react-bootstrap';
import { CSVLink } from "react-csv";


function UserHeaderUI(userType, enrollmentCSVData, studentsCSVData) {
  const token = document.head.getElementsByTagName('meta')[2].content;
  if (userType === "admin") {
    return (<Navbar className="bg-body-tertiary justify-content-between"> <div /> <div> &emsp; &emsp; &emsp; &emsp; <a href={"/admin/enrollments"}>Enrollment Index</a> &emsp; <a href={"/admin/enrollments/new"}>New Enrollment Session</a> &emsp; <CSVLink data={enrollmentCSVData} filename={"enrollments"}>Enrollments CSV file</CSVLink> &emsp; <CSVLink data={studentsCSVData} filename={"students"}>Students CSV file</CSVLink></div> <div>
      <form action='/logout' method="post">
      <input type="hidden" name="authenticity_token" value={token} />
      <input type="hidden" name="_method" value="DELETE" />
      <Button variant="outline-danger" type="submit" > Logout </Button>
      </form>
      </div>
      </Navbar>)
  }
}

export default UserHeaderUI;
