import React from 'react'
import {Table , TableBody, TableRow, TableHead,TableCell} from '@mui/material';

const PassengerDetails = () => {
  return (
    <div>
        <Table sx={{ width: 500, maxWidth: '100%', }} aria-label="simple table" className="table" id="table">
            <TableHead>
                <TableRow>
                    <TableCell className="table__header">Name</TableCell>
                    <TableCell className="table__header" align="right">Ancillary details</TableCell>
                    <TableCell className="table__header" align="right">Seat Number</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Jeevitha</TableCell>
                    <TableCell align="right">Meal,beverages</TableCell>
                    <TableCell align="right">10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Jeevitha</TableCell>
                    <TableCell align="right">Meal,beverages</TableCell>
                    <TableCell align="right">11</TableCell>
                </TableRow>
            </TableBody>

        </Table>
      
    </div>
  )
}

export default PassengerDetails
