import {combineReducers} from 'redux'
import {fetchPassengerReducer, createPassengerReducer, updatePassengerReducer} from './passengers/passengerReducer'

const rootReducer = combineReducers({
    fetchPassengerReducer,
    createPassengerReducer,
    updatePassengerReducer
});

export default rootReducer;