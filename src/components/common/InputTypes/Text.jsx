import React from 'react'
import { TextField } from '@mui/material'

const Text = ({type, id, label}) => {
  return (
    <TextField
        sx={{my: 2}} 
        type={type}
        fullwidth
        id={id}
        label={label}
    />
  )
}

export default Text
