import { useState } from 'react';
import React from 'react';
import { Formheading } from './Images';
import { 
  Alert,
  Box,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Snackbar,
  TextField,
  Typography } from '@mui/material'

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios, { Axios } from 'axios';

const card = (
  <React.Fragment>
    <CardContent>
      <Formheading />
    </CardContent>
  </React.Fragment>
);

const registerSubmit = (data: { parentName: string; email: string; phone: string; city: string; state: string; zipcode: string; studentName: string; pronouns: string; message: string; instrument: string; }) => {
  return axios.post( "https://expressapicontactform.herokuapp.com/contact", {
      parentName: data.parentName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      studentName: data.studentName,
      pronouns: data.pronouns,
      message: data.message,
      instrument: data.instrument,
  })
};

export function StateSelect() {
  const [states, setStates] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setStates(event.target.value as string);
  };

  const stateList = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>State</InputLabel>
        <Select
          labelId="state-select-label"
          id="state-select"
          value={states}
          label="State"
          onChange={handleChange}
        >
          {stateList.map((state, index) => (<MenuItem value={index}>{state}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default function Register() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Submit");
  const [resMessage, setResMessage] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();

const onSubmit = async (data: any) => {
  setStatus("Sending...");
  setResMessage('');
  let response = registerSubmit(data);
  response.then((response) => {
      if (response.status === 200) {
          console.log(response.data);
          setOpen(true)
      }
     
  })
  .catch((error) => {
      console.log(error)
  })
  alert((await response).data.status);
  setStatus("Submit");
  window.location.reload()
  navigate('/')
};

const handleClose = (event: any, reason: string) => {
if (reason === 'clickaway') {
  return;
}
setOpen(false)
};


  return (
    <Box gridRow={3} gridColumn={3}>
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '6.8em'}}>
      <h1 className='fadeRightMini'>Sign Up Today!</h1>
    </Box>
    <Card className='fadeLeftMini' variant="outlined" raised sx={{margin: '15px', backgroundColor: "#FFC363", width: 'auto', position: 'sticky'}}>{card}</Card>
           <Card className='fadeLeftMini' variant="outlined" raised sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '3em', backgroundColor: "#FFC363"}}>
            <h3>Contact Info:</h3>
           <form onSubmit={handleSubmit(onSubmit)} style={{}}>
              <TextField
                margin="normal"
                type="text"
                required
                fullWidth
                id="parentName"
                label="Your Name"
                autoFocus
                {...register("parentName", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.username && 'Name cannot be blank!'}
            </Typography>

              <TextField
                margin="normal"
                required
                fullWidth
                label="Email"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.email && 'Email is required'}
            </Typography>

            <TextField
                margin="normal"
                type="text"
                required
                fullWidth
                id="phone"
                label="Phone No."
                autoFocus
                {...register("phone", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.phone && 'Phone No. cannot be blank!'}
            </Typography>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'row'}}>
            <TextField
                margin='none'
                fullWidth
                type="text"
                required
                id="city"
                label="City"
                autoFocus
                {...register("city", { required: true })}
              />
              <StateSelect />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.city && 'City cannot be blank!'}
            </Typography>
            
            <TextField
                margin='none'
                type="text"
                required
                id="zipcode"
                label="ZIP"
                autoFocus
                {...register("zipcode", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.zipcode && 'ZIP Code cannot be blank!'}
            </Typography>
            </Box>
            <h3>Student Info:</h3>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'row'}}>
            <TextField
                margin="none"
                type="text"
                required
                fullWidth
                id="studentName"
                label="Student's Name"
                autoFocus
                {...register("studentName", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.studentname && 'Name cannot be blank!'}
            </Typography>
            <TextField
                margin="none"
                type="text"
                id="pronouns"
                label="Preferred Pronouns"
                autoFocus
                {...register("pronouns", { required: true })}
              />
            </Box>
            <h5>Tell Me About Yourself:</h5>
            <TextField
                margin="dense"
                required
                fullWidth
                multiline
                minRows='6'
                maxRows='10'
                label="About Me..."
                type="text"
                id="message"
                {...register("message", { required: true })}
              />
              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.message && 'Message cannot be blank!'}
            </Typography>
            <h5>List Any Musical Instrument Experience:</h5>
            <TextField
                margin="dense"
                fullWidth
                multiline
                minRows='1'
                maxRows='5'
                label="Instruments"
                type="text"
                id="instruments"
                {...register("instruments", { required: true })}
              />

              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {resMessage && `${resMessage}`}
            </Typography>
            </form>
            </Card>

          <Snackbar open={open} autoHideDuration={7000} onClose={handleClose}>
            <Alert severity='success'>
              Submitted Successfully! Our instructors will reach out to you soon.
            </Alert>
          </Snackbar>

  </Box>
  );
}