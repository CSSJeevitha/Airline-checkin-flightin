import { Button } from '@mui/material'
import React from 'react'

const ButtonType = ({type,variant,label}) => {
  return (
    <Button sx={{my: 2}} type={type} variant={variant}>{label}</Button>
  )
}

export default ButtonType
