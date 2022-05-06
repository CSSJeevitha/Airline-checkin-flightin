import React,{useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, Checkbox} from '@mui/material';
import {connect} from 'react-redux'
import {createPassengers, updatePassengers} from '../../redux';
import Moment from 'react-moment'

import AncillaryServices from './AncillaryServices';
import { useNavigate , useLocation} from 'react-router';
import axios from 'axios';
// import {Redirect} from "react-router-dom";

const Passengers = ({createPassengers,ancillaryServicess,updatePassengers}) => {

  const [passengerDetails, setPassengerDetails] = useState({
    id: "",
    flightno: "",
    userid: "",
    name: "",
    seatNo: "",
    ancillaryServices: [
        {
            serviceType: "Special Meals",
            opted: false
          },
          {
            serviceType: "Beverages",
            opted: false
          },
          {
            serviceType: "Baggage Services",
            opted: false
          }
    ],
    address: "",
    passportNo: "",
    DOB: ""
  })

  let isUpdate = false;

  
  let data = useLocation();
  const selectedPassenger = data.state?.passenger ? data.state.passenger : 0;
  isUpdate = data.state?.isUpdate ? data.state.isUpdate : false;
  console.log(isUpdate);
  if(selectedPassenger) {
    // useEffect(() => {
    //     axios.get(`http://localhost:3000/passengers/${selectedId}`).then(response => {
    //         setPassengerDetails(response.data);
    //     })      
    //  },[])
     useEffect(() => {
        setPassengerDetails(selectedPassenger);
    },[]);

  }
  

  let navigate = useNavigate();

  console.log(passengerDetails);
  const [ancillaryServices, SetancillaryServices] = useState(ancillaryServicess)
  
  const handleSubmit = (event) => {
    console.log(isUpdate);
    alert("hiiii");
    event.preventDefault();
    if(isUpdate) {
        updatePassengers({...passengerDetails});
    } else {
        createPassengers({...passengerDetails});
    }
    
    navigate('/admin')
  }

  const handleChange = (event, serviceType) => {
    
    const target = event.target;
    
    console.log(target);
    
    if( target.type === 'checkbox') {
        const updatedAncillaryServices = [...passengerDetails.ancillaryServices.map((service) => {
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
        {console.log(passengerDetails.name)}
        <h2>{isUpdate ? "Update" : "Add"} passengers</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
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
                value={passengerDetails.name}
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
            
            {passengerDetails.ancillaryServices.map((service, index) => {
                return (
                    <div className='checkbox-container' key={index}>
                        {/* <Checkbox inputProps={{'id': index}} type="checkbox" checked={service.opted} onChange={(event) => handleChange(event,service.serviceType)}/> */}
                        <Checkbox inputProps={{'id': index}} type="checkbox" checked={service.opted} onChange={(event) => handleChange(event,service.serviceType)}/>
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
                {isUpdate ? "Update" : "Save"}
            </Button>
        </Box>
    </form>
    </>
    
  )
}

const mapStateToProps = (state,ownProps) => {
    return {
        passengers: state.createPassengerReducer.passengers,
        
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        createPassengers: (passenger) => dispatch(createPassengers(passenger)),
        updatePassengers: (passenger) => dispatch(updatePassengers(passenger))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Passengers)
