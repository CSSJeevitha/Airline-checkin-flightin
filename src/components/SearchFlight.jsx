import { Card,NativeSelect } from '@mui/material';
import React from 'react'
import ButtonType from './common/InputTypes/ButtonType';
import SelectType from './common/InputTypes/SelectType'
import Text from './common/InputTypes/Text'

const SearchFlight = () => {
    const from = ['Chennai','Bangalore','Delhi','Hyderabad'];
    const to = ['Chennai','Bangalore','Delhi','Hyderabad'];
    console.log("hii"+from[0])
  return (
    <Card className='form-container search-form'>
        <form className='form'>
              <SelectType options={from} label="From" className="form-select"/>
              <SelectType options={to} label="To" />
              <Text type="date" label="Time"/>
              <ButtonType type="submit" label="Search Flight" variant="contained"/>
        </form>
    </Card>
    
  )
}

export default SearchFlight
