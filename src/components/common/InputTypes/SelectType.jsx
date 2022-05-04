import React from 'react'
import {NativeSelect, MenuItem,Select} from '@mui/material'

const SelectType = ({options,label}) => {
  console.log(options);
  return (
    // <div>
    //   <label htmlfor="#select">{label}</label>
    //   <select id="select">
    //     <option value={""}>Select</option>
    //     {options.map((option) => {
    //         return (
    //             <option value={option}>{option}</option>
    //         )
    //     })}
    //   </select>
    // </div>
    <>
      <Select defaultValue={""} displayEmpty className="form-select">
      
        <MenuItem value={""}>Select</MenuItem>
        {options.map((option) => {
          return (
            <MenuItem value={option} >{option}</MenuItem>
          )
        })}
      </Select>
    </>
    
  )
}

export default SelectType
