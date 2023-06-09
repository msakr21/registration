import React, { useState } from 'react';

function NewStudent() {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const enrollment_id = document.getElementById("data").getAttribute("enrollmentID")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const uri = `/enrollments/${enrollment_id}/students`

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

  return <div>
            <h1>Please fill the form below:</h1>
                <form action={uri} method="post">
                <input type="hidden" name="authenticity_token" value={csrf_token} />
                <p>Please enter your first name:</p>
                <input type="text" name="first_name" value={firstName} onChange={handleFirstNameChange}/>
                <br />
                <p>Please enter your last name:</p>
                <input type="text" name="last_name" value={lastName} onChange={handleLastNameChange}/>
                <br />
                <p>Please enter your email:</p>
                <input type="text" name="email" value={email} onChange={handleEmailChange}/>
                <br />
                <p>Please enter your phone number:</p>
                <input type="text" name="phone" value={phone} onChange={handlePhoneChange}/>
                <br />
                <br />
                <button>Submit</button>
                </form>
          </div>
};

export default NewStudent;