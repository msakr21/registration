import React, { useState } from 'react';
// import DateTimePicker from 'react-datetime-picker';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


function NewEnrollment() {
  const admin = document.getElementById("test").getAttribute("admin");
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const [location, setLocation] = useState("Eloise May");
  const [schedule, setSchedule] = useState(new Date());
  const [students, setStudents] = useState(30)
 
  const handleScheduleChange = (newValue) => {
    setSchedule(newValue);
  };
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  };

  const handleStudentsChange = (event) => {
    setStudents(event.target.value)
  };

  

  return <div>
          <h1>Hello {admin}! Please fill in the form below!</h1>
          <form action="/enrollments" method="post">
            <input type="hidden" name="authenticity_token" value={csrf_token} />
            <input type="hidden" name="location" value={location} />
            <input type="hidden" name="schedule" value={schedule} />
            <div>
            <p>Please Choose a Location:</p>
            <select value={location} onChange={handleLocationChange}>
              <option value="Eloise May">Eloise May</option>
              <option value="Sheridan">Sheridan</option>
              <option value="Smoky Hill">Smoky Hill</option>
            </select>
            </div>
            <div>
            <p>Please enter number of students:</p>
            <input type="number" name="student_limit" value={students} onChange={handleStudentsChange}/>
            </div>
            <br />
            <br />
            <div style={{margin: "5% 40%"}}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                    label="Please select a Date"
                    inputFormat="MM/dd/yyyy"
                    value={schedule}
                    onChange={handleScheduleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <TimePicker
                    label="Please select a Start Time"
                    value={schedule}
                    onChange={handleScheduleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  {/* <DateTimePicker
                    label="Date&Time picker"
                    value={value}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  /> */}
                </Stack>
              </LocalizationProvider>
            </div>
            <br />
            <br />
            <button>Submit</button>
          </form>
         </div>
};

export default NewEnrollment;