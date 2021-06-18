import * as types from '../constants/ActionTypes';

const initialState = {}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_USER:
            state = action.user;
            return state;

        case types.ADD_USER:
            state = {};
            return state;

        case types.IS_TOGGLE_FORM:
            state = {};
            return state;
            
        default: return state;
    }
}
export default myReducer;