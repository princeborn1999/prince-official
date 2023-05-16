import { combineReducers } from 'redux';
import modeReducer from './store/modeReducers';
const rootReducer = combineReducers({
    mode: modeReducer,
});
export default rootReducer