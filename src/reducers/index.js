import { combineReducers } from "redux";
import isDisplayForm from './isDisplayForm';
import isEditing from './isEditting';
import users from './user';

const myReducer = combineReducers({
    isDisplayForm,
    users: users,
    isEditing,
});

export default myReducer;
