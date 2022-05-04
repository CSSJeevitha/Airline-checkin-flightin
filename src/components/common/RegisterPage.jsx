import { InputLabel, Typography ,TextField} from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import ButtonType from './InputTypes/ButtonType.jsx'
import Text from './InputTypes/Text.jsx'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Card className='login-page form-container'>
         <form className='login-page__form form'>
            <Typography variant="h4">Sign Up</Typography>
                <Text
                    type="textl"
                    id="name"
                    label="Name"
                />
                <Text
                    type="email"
                    id="email"
                    label="Email"
                />
                <Text
                    type="password"
                    id="new-password"
                    label="Password"
                />
                <Text
                    type="password"
                    id="confirm-password"
                    label="ConfirmPassword"
                />
                <ButtonType 
                    type="submit"
                    variant="contained"
                    label="Sign Up"
                />
            </form>
            <p>Registered User? Click here to <Link to="/login">login</Link></p>
    </Card>
  )
}

export default LoginPage
