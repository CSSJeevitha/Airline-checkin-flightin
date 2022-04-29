import { InputLabel, Typography ,TextField} from '@mui/material'
import { Card } from '@mui/material'
import React from 'react'
import ButtonType from './InputTypes/ButtonType.jsx'
import Text from './InputTypes/Text.jsx'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <Card className='login-page'>
         <form className='login-page__form'>
            <Typography variant="h4">Login</Typography>
                <Text
                    type="email"
                    id="email"
                    label="Email"
                />
                <Text
                    type="password"
                    id="fullwidth"
                    label="Password"
                />
                <ButtonType 
                    type="submit"
                    variant="contained"
                    label="Login"
                />
            </form>
            <p>New User? Click here to <Link to="/register">Register</Link></p>
    </Card>
  )
}

export default LoginPage
