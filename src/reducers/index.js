import { combineReducers } from "redux";
import todosSlice from '../containers/User/redux-toolkit';

const rootReducer = combineReducers({
    user: todosSlice
});

export default rootReducer;