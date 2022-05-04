import {combineReducers} from 'redux'
import {fetchPassengerReducer, createPassengerReducer} from './passengers/passengerReducer'

const rootReducer = combineReducers({
    fetchPassengerReducer,
    createPassengerReducer
});

export default rootReducer;