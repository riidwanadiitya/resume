import { combineReducers } from 'redux';
import navReducer from './nav/NavReducer';

const rootReducer = combineReducers({
    navigation: navReducer
})

export default rootReducer