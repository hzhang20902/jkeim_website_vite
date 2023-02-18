import { useState, useEffect } from 'react';
import React from 'react';
import { Formheading } from './Images';
import { 
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography } from '@mui/material'

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const card = (
  <React.Fragment>
    <CardContent>
      <Formheading />
    </CardContent>
  </React.Fragment>
);

const registerSubmit = (data: { 
  parentName: string; 
  email: string; 
  phone: string; 
  city: string; 
  state: string; 
  zipcode: string; studentName: string; pronouns: string; message: string; instruments: string; }) => {
  return axios.post( "https://expressapicontactform.herokuapp.com/register", {
      parentName: data.parentName,
      email: data.email,
      phone: data.phone,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      studentName: data.studentName,
      pronouns: data.pronouns,
      message: data.message,
      instruments: data.instruments,
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
          {stateList.map((state, index) => (<MenuItem value={(index+1)*10}>{state}</MenuItem>))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default function Register() {

  useEffect(() => {
    window.scrollBy({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }, [])

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
      }
     
  })
  .catch((error) => {
      console.log(error)
  })
  alert((await response).data.status);
  setStatus("Submit");
  navigate('/')
};

  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', objectFit: 'fill', width: '100%'}}>
      <h1 className='fadeRightMini'>Sign Up Today!</h1>
    
           <Card className='fadeLeftMini' variant="outlined" raised sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '3em', backgroundColor: "#FFC363"}}>
            <h3>Contact Info:</h3>
           <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("city", { required: true })}
              />

              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {errors?.city && 'City cannot be blank!'}
            </Typography>
            <StateSelect />
            <TextField
                margin='none'
                type="text"
                required
                id="zipcode"
                label="ZIP"
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
              <Button
                type="submit"
                variant="contained"
                sx={{backgroundColor: '#5E2315', color: '#FFC363', margin: '1em'}}
              >
                {status}
              </Button>

              <Typography sx={{ color: 'red', textAlign: 'center' }}>
              {resMessage && `${resMessage}`}
            </Typography>
            </form>
            </Card>
            <Card className='fadeLeftMini' variant="outlined" raised sx={{margin: '15px', backgroundColor: "#FFC363", width: 'auto'}}>{card}</Card>

  </Box>
  );
}