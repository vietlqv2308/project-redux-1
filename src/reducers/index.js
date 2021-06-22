import { combineReducers } from "redux";
import userReducer from '../containers/User/reducers.js';
import productReducer from '../containers/Product/store/reducers';

const rootReducer = combineReducers({
    user : userReducer,
    product: productReducer,
});

export default rootReducer;