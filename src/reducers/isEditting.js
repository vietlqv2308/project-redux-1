import * as types from '../constants/ActionTypes';

const initialState = {
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_USER:
            return {
                ...action.user
            };

        case types.ON_CHANGE:
            return {
                ...state,
                ...action.payload,
            }

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