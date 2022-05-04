import { Button, CardActions,Card, CardContent, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'
import LoginPage from './common/LoginPage'
import Text from './common/InputTypes/Text'
import SelectType from './common/InputTypes/SelectType'
 

const HomePage = () => {
  

  return (
    <Card className='home'>
        <CardContent>
            <p>Welcome to Jeevi Online Ticket Booking service</p>
            <CardActions className='home__profiles'>
                <Button variant="contained">Admin</Button>
                <Button variant="contained">Staff</Button>
            </CardActions>
        </CardContent>
        {/* <form>
            <Typography>Find the available flights here!!!!</Typography>
            <SelectType options={from}/>
            <SelectType options={to} />
        </form> */}
    </Card>
  )
}

export default HomePage
