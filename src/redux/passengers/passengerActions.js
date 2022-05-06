import {
    FETCH_PASSENGERS_REQUEST, 
    FETCH_PASSENGERS_SUCCESS, 
    FETCH_PASSENGERS_FAIL,
    CREATE_PASSENGERS_REQUEST,
    CREATE_PASSENGERS_SUCCESS,
    CREATE_PASSENGERS_FAIL,
    UPDATE_PASSENGERS_REQUEST,
    UPDATE_PASSENGERS_SUCCESS,
    UPDATE_PASSENGERS_FAIL
} from './passengerActionTypes'
import axios from 'axios'

export function fetchPassengersRequest() {
    return {
        type: FETCH_PASSENGERS_REQUEST
    }
}

export function fetchPassengersSucces(passengers) {
    
    return {
        type: FETCH_PASSENGERS_SUCCESS,
        payload: passengers
    }
}

export function fetchPassengersFailure(error) {
   
    return {
        type: FETCH_PASSENGERS_FAIL,
        payload: error
    }
}

export function createPassengersRequest() {
    return {
        type: CREATE_PASSENGERS_REQUEST
    }
}

export function createPassengersSucces(passengers) {
    
    return {
        type: CREATE_PASSENGERS_SUCCESS,
        payload: passengers
    }
}

export function createPassengersFailure(error) {
   
    return {
        type: CREATE_PASSENGERS_FAIL,
        payload: error
    }
}

export function updatePassengersRequest() {
    return {
        type: UPDATE_PASSENGERS_REQUEST
    }
}

export function updatePassengersSucces(passengers) {
    debugger;
    return {
        type: UPDATE_PASSENGERS_SUCCESS,
        payload: passengers.passengerDetails
    }
}

export function updatePassengersFailure(error) {
    debugger;
    return {
        type: UPDATE_PASSENGERS_FAIL,
        payload: error
    }
}

export const fetchPassengers = () => {
    
    return function(dispatch) {
        dispatch(fetchPassengersRequest());
        axios.get('http://localhost:3000/passengers')
            .then(response => {
                const passengers = response.data;
                dispatch(fetchPassengersSucces(passengers));
            })
            .catch(error => {
                dispatch(fetchPassengersFailure(error.message));
            })
    }
    
}

export const createPassengers = (passengerDetails) => {
    debugger;
    console.log("create",passengerDetails);
    return function(dispatch) {
        dispatch(createPassengersRequest());
        
        axios.post(`http://localhost:3000/passengers`, passengerDetails)
            .then(response => {
                const passengers = response.data;
                console.log(response.data);
                dispatch(createPassengersSucces(passengers));
            })
            .catch(error => {
                dispatch(createPassengersFailure(error.message));
            })
    }  
}

export const updatePassengers = (passengerDetails) => {
    debugger;
    // console.log("update",passengerDetails);
    return async function(dispatch) {
        dispatch(updatePassengersRequest());
        
       await axios.put(`http://localhost:3000/passengers/${passengerDetails.id}`, passengerDetails)
            .then(response => {
                const passengers = response.data;
                console.log(response.data);
                dispatch(updatePassengersSucces(passengers));
            })
            .catch(error => {
                dispatch(updatePassengersFailure(error.message));
            })
    }  
}
