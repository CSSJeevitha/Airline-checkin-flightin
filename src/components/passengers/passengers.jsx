import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const passengers = () => {
  const [passengerDetails, setPassengerDetails] = useState({
     fullName: '',
     passportNumber:'',
     address:'',
     pincode:''
  })
  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(passengerDetails);
  }

  const handleChange = (event) => {
    const target = event.target;
    setPassengerDetails({...passengerDetails, [target.name]: target.value})
  }
  return (
    <>
        <h2>Add/Update passengers</h2>
        <form onSubmit={handleSubmit}>
        <Box sx={{ width: 500, maxWidth: '100%',}}>
            <TextField 
                sx={{my: 2}} 
                fullWidth 
                label="Name" 
                id="fullWidth" 
                name="fullName" 
                value={passengerDetails.fullName}
                onChange={handleChange}
            />
            <TextField 
                sx={{my: 2}} 
                fullWidth 
                label="Passport Number" 
                name="passportNumber" 
                value={passengerDetails.passportNumber}
                onChange={handleChange}
            />
            <TextField 
                sx={{my: 2}} 
                fullWidth 
                label="Address" 
                name="address" 
                value={passengerDetails.address}
                onChange={handleChange}
            />
            <TextField 
                sx={{my: 2}} 
                fullWidth 
                label="Pincode" 
                name="pincode" 
                value={passengerDetails.pincode}
                onChange={handleChange}
            />
            <Button 
                type="submit" 
                variant="contained" 
                size='large'
            >
                Save
            </Button>
        </Box>
    </form>
    </>
    
  )
}

export default passengers
