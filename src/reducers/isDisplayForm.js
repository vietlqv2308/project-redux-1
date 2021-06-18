import * as types from '../constants/ActionTypes';

const initialState = false;

const myReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.IS_TOGGLE_FORM:
            state = !state;
            return state;

        case types.IS_OPEN_FORM:
            state = true
            return state;

        case types.IS_CLOSE_FORM:
            state = false
            return state;
        default:
            return state
    }

}

export default myReducer;