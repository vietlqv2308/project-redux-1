import { combineReducers } from "redux";
import isDisplayForm from './isDisplayForm';
import isEditing from './isEditting';
import user from './user';

const myReducer = combineReducers({
    isDisplayForm : isDisplayForm,
    users : user,
    isEditing: isEditing,
});

export default myReducer;

