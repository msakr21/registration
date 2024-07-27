import React from 'react';
import {Button, Navbar} from 'react-bootstrap';


function UserHeaderUI(userType) {
  const token = document.head.getElementsByTagName('meta')[2].content;
  if (userType === "admin") {
    return (<Navbar className="bg-body-tertiary justify-content-between"> <div /> <div> &emsp; &emsp; &emsp; &emsp; <a href={"/admin/enrollments"}>Enrollment Index</a> &emsp; <a href={"/admin/enrollments/new"}>New Enrollment Session</a></div> <div>
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
