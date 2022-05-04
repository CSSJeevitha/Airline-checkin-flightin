import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import store from './redux/store';
import {Provider as ReduxProvider} from 'react-redux'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import Passengers from './components/passengers/Passengers.jsx';
import AncillaryServices from './components/passengers/AncillaryServices.jsx';
import PassengerDetails from './components/passengers/PassengerDetails.jsx';
import HomePage from './components/HomePage.jsx';
import Header from './components/Header.jsx';
import LoginPage from './components/common/LoginPage.jsx';
import RegisterPage from './components/common/RegisterPage.jsx'
import SearchFlight from './components/SearchFlight.jsx';
import { Switch } from '@mui/material';
import AdminDashboard from './components/admin/AdminDashboard.jsx';

function App() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event,newValue) => {
      console.log(event,newValue)
      setValue(newValue);
    };

    const ancillaryServices = store.getState().fetchPassengerReducer.ancillary;


    return (
        <>
        
            <Header />
            <Routes>
                <Route path='/login' exact element={<LoginPage />}/>
                <Route path='/home' element={<HomePage />}/>
                <Route path='/' element={<AdminDashboard />}/>
                <Route path='/register' element={<RegisterPage />}/>
                <Route path='/search' element={<SearchFlight />}/>
                <Route path='/ancillary' element={<AncillaryServices />}/>
                <Route path='/addpassengers' element={<Passengers ancillaryServicess={ancillaryServices}/>}/>
            </Routes>
            {/* <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered variant="fullWidth">
                    <Tab label="Admin" value="1" indicatorColor="secondary"/>
                    <Tab label="Airline Staff" value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <h1>Admin</h1>
                    <PassengerDetails />
                    <Passengers />
                    <AncillaryServices />
                    
                </TabPanel>
                <TabPanel value="2">
                    <h2>Airline Staff</h2>
                </TabPanel>
            </TabContext>
        </Box> */}
        </>
    )
       
}
ReactDOM.render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>,
     document.getElementById('root')
);

export default App;
