import React from 'react'
import {Menu, MenuBook} from '@mui/icons-material';
import {AppBar, Box, Toolbar, Typography} from '@mui/material';
import logo from './logo.jpg'

const Header = () => {
  console.log(logo);
  return (
    <Box className='header'>
        <AppBar position="static">
        <Toolbar>
            <Menu className='header__menu'/>
            {/* <div>
              <img src='./logo.jpg' alt="Logo Image"/>
            </div> */}
            <Typography variant="subtitle" sx={{pr: 4}}>Online Airline Ticket Bookings</Typography>
        </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Header
