import React from 'react'
import {Select, MenuItem} from '@mui/material'

const SelectType = ({options}) => {
  console.log(options);
  return (
    // <select>
    //     {options.map((option) => {
    //         return (
    //             <option value={option}>{option}</option>
    //         )
    //     })}
    // </select>
    <Select>
    {options.map((option) => {
        return (
            <MenuItem value={option}>{option}</MenuItem>
        )
    })}
   </Select>
  )
}

export default SelectType
