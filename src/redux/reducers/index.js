import {combineReducers as rootReducer} from 'redux';
import {reducer as listingsReducer} from '../reducers/listingsReducer';
import {reducer as pricingReducer} from '../reducers/pricingReducer';
import {reducer as userReducer} from '../reducers/userReducer';
import {reducer as signinReducer} from '../reducers/signinReducer';
export default rootReducer({
    listingsReducer, pricingReducer, userReducer,
    signinReducer
})