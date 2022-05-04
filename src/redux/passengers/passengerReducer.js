import {
    FETCH_PASSENGERS_REQUEST, 
    FETCH_PASSENGERS_SUCCESS, 
    FETCH_PASSENGERS_FAIL,
    CREATE_PASSENGERS_REQUEST,
    CREATE_PASSENGERS_SUCCESS,
    CREATE_PASSENGERS_FAIL
} from './passengerActionTypes'
import data from '../../../db.json'

export const fetchPassengerReducer = (state = data, action) => {
    switch(action.type) {
        case FETCH_PASSENGERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PASSENGERS_SUCCESS:
            return {
                loading: true,
                passengers: action.payload,
                error: ''
            }
        case FETCH_PASSENGERS_FAIL:
            return {
                loading: true,
                passengers: state,
                error: action.payload
            }
        default: 
            return state
    }
}

export const createPassengerReducer = (state = data, action) => {
    switch(action.type) {
        case CREATE_PASSENGERS_REQUEST:
            
            return {
                ...state,
                loading: true
            }
            
        case CREATE_PASSENGERS_SUCCESS:
            
            const passengerData = {...action.payload, id: data.length}
            return {
                loading: true,
                passengers: [...state, passengerData],
                error: ''
            }
            
        case CREATE_PASSENGERS_FAIL:
            
            return {
                loading: true,
                passengers: state,
                error: action.payload
            }
            
        default: 
            return state
    }
}
