import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Checkbox} from '@mui/material';
import {connect} from 'react-redux'
import {createPassengers} from '../../redux';
import AncillaryServices from './AncillaryServices';

const Passengers = ({createPassengers,ancillaryServicess}) => {
  const [passengerDetails, setPassengerDetails] = useState({
    "id": "",
    "flightno": "",
    "userid": "",
    "name": "",
    "seatNo": "",
    "ancillaryServices": [
    ],
    "address": "",
    "passportNo": "",
    "DOB": ""
  })
  const [ancillaryServices, SetancillaryServices] = useState(ancillaryServicess)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    createPassengers({...passengerDetails}); 
  }

  const handleChange = (event, serviceType) => {
    
    const target = event.target;
    
    console.log(target);
    
    if( target.type === 'checkbox') {
        const updatedAncillaryServices = [...ancillaryServices.map((service) => {
            if(serviceType === service.serviceType) {
                return ({
                    ...service,
                    opted: target.checked
                })
            } else {
                return service;
            }
        })];
        SetancillaryServices(updatedAncillaryServices);

        setPassengerDetails({...passengerDetails, ancillaryServices:updatedAncillaryServices})
    } else {
        setPassengerDetails({...passengerDetails, [target.name]: target.value})
    }
    
  }
  return (
    <>
        {console.log(passengerDetails)}
        <h2>Add/Update passengers</h2>
        <form onSubmit={handleSubmit}>
        <Box sx={{ width: 500, maxWidth: '100%',}}>
            <TextField 
                sx={{my: 2}} 
                fullWidth 
                label="Flight Number" 
                id="flightNo" 
                name="flightno" 
                value={passengerDetails.flightno}
                onChange={handleChange}
            />
            <TextField 
                sx={{my: 2}} 
                fullWidth 
                label="Name" 
                id="fullWidth" 
                name="name" 
                value={passengerDetails.fullName}
                onChange={handleChange}
            />
            <TextField 
                sx={{my: 2}} 
                fullWidth 
                label="Seat Number" 
                id="seatNo" 
                name="seatNo" 
                value={passengerDetails.seatNo}
                onChange={handleChange}
            />
            <TextField 
                sx={{my: 2}} 
                fullWidth 
                label="Passport Number" 
                name="passportNo" 
                value={passengerDetails.passportNo}
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
                type="date"
                label="Date Of Birth" 
                name="DOB" 
                value={passengerDetails.DOB}
                onChange={handleChange}
            />
            
            {ancillaryServices.map((service, index) => {
                return (
                    <div className='checkbox-container' key={index}>
                        {/* <Checkbox inputProps={{'id': index}} type="checkbox" checked={service.opted} onChange={(event) => handleChange(event,service.serviceType)}/> */}
                        <Checkbox inputProps={{'id': index}} type="checkbox" onChange={(event) => handleChange(event,service.serviceType)}/>
                        <label htmlFor={index}>{service.serviceType}</label>
                    </div>  
                )
            })}
            
            <Button 
                type="submit" 
                variant="contained" 
                size='large'
                // onClick={createPassengers}
            >
                Save
            </Button>
        </Box>
    </form>
    </>
    
  )
}

const mapStateToProps = (state) => {
    return {
        passengers: state.createPassengerReducer.passengers,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        createPassengers: (passenger) => dispatch(createPassengers(passenger))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Passengers)
