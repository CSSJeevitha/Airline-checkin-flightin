import { Checkbox} from '@mui/material'
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import '../../scss/index.scss'

const AncillaryServices = () => {
  const [ancillaryServices, SetancillaryServices] = useState([
    {serviceType: "Special Meals", opted: false},
    {serviceType: "Beverages", opted: false},
    {serviceType: "Baggage Services", opted: false}
  ])
  
 const handleSubmit = (event) => {
      event.preventDefault();
      console.log(ancillaryServices);
  }

  const handleChange = (event,serviceType) => {
    const target = event.target;
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
  }

  return (
        
        <form onSubmit={handleSubmit}>
            {ancillaryServices.map((service, index) => {
                return (
                    <div className='checkbox-container' key={index}>
                        <Checkbox inputProps={{'id': index}} type="checkbox" checked={service.opted} onChange={(event) => handleChange(event,service.serviceType)}/>
                        <label htmlFor={index}>{service.serviceType}</label>
                    </div>  
                )
            })}
            <Button type="submit" variant="contained" size='large'>Update</Button>
        </form>
  )
}

export default AncillaryServices
