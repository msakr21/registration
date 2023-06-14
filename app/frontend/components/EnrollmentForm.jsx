import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


function EnrollmentForm(props) {
  const csrf_token = document.head.getElementsByTagName('meta')[2].content;
  const [location, setLocation] = useState(props.location);
  const [schedule, setSchedule] = useState(props.schedule);
  const [students, setStudents] = useState(props.students);
  const method = props.method;
  const path = props.path;
 
  const handleScheduleChange = (newValue) => {
    setSchedule(newValue);
  };
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  };

  const handleStudentsChange = (event) => {
    setStudents(event.target.value)
  };

  function RenderField (method) {
    if (method == "patch") {
      return <input type="hidden" name="_method" value="PATCH" />
    }
  }

  return <div>
          <h1>Please fill the form below:</h1>
          <form action={path} method="post">
            <input type="hidden" name="authenticity_token" value={csrf_token} />
            {RenderField(method)}
            <input type="hidden" name="location" value={location} />
            <input type="hidden" name="schedule" value={schedule} />
            <div id="location">
            <p>Please Choose a Location:</p>
            <select name="location" value={location} onChange={handleLocationChange}>
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
                    name="TimePicker"
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

export default EnrollmentForm;