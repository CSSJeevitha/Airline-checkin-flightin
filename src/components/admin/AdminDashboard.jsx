import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Container, Box, Table , TableBody, TableRow, TableHead,TableCell, Button, Collapse,IconButton, Typography} from '@mui/material';
import {KeyboardArrowDown as KeyboardArrowDownIcon, KeyboardArrowUp as KeyboardArrowUpIcon} from '@mui/icons-material'
import {connect} from 'react-redux'
import {fetchPassengers} from '../../redux';


const AdminDashboard = ({passengers,fetchPassengers}) => {
  useEffect(() => {
    console.log("hiii",passengers)
     fetchPassengers();
  },[])

  // const getPassengerInfo = (selectedPassenger) => {
  //   navigate('/admin', )
  // }

  const Row = ({passenger}) => {
    console.log(passenger);
    const [open, setOpen] = React.useState(false);
    return (
      <>
      <TableRow key={passenger.userid}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => {
                  console.log(open);
                  return setOpen(!open);
                }
                }
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell>{passenger.name}</TableCell>
            <TableCell align="right">{passenger.ancillaryServices?.map((service) => { return <p>{service.opted && service.serviceType}</p>})}</TableCell>
            <TableCell align="right">{passenger.seatNo}</TableCell>
            <TableCell align="right">
              {/* <Link to={{ pathname:"addpassengers" , state: {passengerId: passenger.id}}}><Button variant="contained">Update</Button></Link> */}
              <Link to="/addpassengers" state={{passenger: passenger, isUpdate: true}}><Button variant="contained" >Update</Button></Link>
            </TableCell>
              
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0,textAlign: "center" }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  <p><strong>Passport No:</strong>{passenger.passportNo} </p>
                  <p><strong>DOB:</strong>{passenger.DOB}</p>
                  <p><strong>Address:</strong>{passenger.address}</p>
                </Typography>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
  }

  return (
    <div>
      <Container maxWidth="lg">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> */}
        <Box sx={{ height: '100vh',bgcolor:"white" }}>
          <Table sx={{maxWidth: '100%', }} aria-label="simple table" className="table" id="table">
            <TableHead>
                <TableRow>
                    <TableCell className="table__header"  colSpan={4}>Flight - 1</TableCell>
                    <TableCell className="table__header" align="right">
                    <Link to="/addpassengers"><Button variant="contained">Add Passenger</Button></Link></TableCell>
                    
                </TableRow>
            </TableHead>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell className="table__header">Name</TableCell>
                    <TableCell className="table__header" align="right">Ancillary details</TableCell>
                    <TableCell className="table__header" align="right">Seat Number</TableCell>
                    <TableCell className="table__header" align="right">Update Passenger Data</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {passengers.map((passenger) => {
                  return(
                    <Row key={passenger.id} passenger={passenger}/>
                  )
                  
              })}
            </TableBody>

        </Table>
        </Box>
      </Container>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      passengers: state.fetchPassengerReducer.passengers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPassengers: () => dispatch(fetchPassengers())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminDashboard)
