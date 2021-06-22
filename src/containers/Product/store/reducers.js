import * as types from './actions';

const initialState = {
    products: [],
    displayForm: false,
    dataEdit: {
        id :'',
        productName:'',
        status: false   
    },
    dataSearch:''
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            state.displayForm = !state.displayForm;
            return { ...state };

        case types.CLOSE_FORM:
            state.displayForm = false;
            return { ...state };

        case types.OPEN_FORM:
            state.displayForm = true;
            return { ...state };

        case types.SEARCH:
            state.dataSearch = action.payload;
            return {...state}

        case types.ON_CHANGE:
            return {
                ...state,
                dataEdit:{
                    ...state.dataEdit,
                    ...action.payload
                }
            }

        case types.GET_PRODUCTS:
            state.products = action.payload
            return { ...state};

        case types.ADD_PRODUCT:
            console.log(action.payload);
            return {...state}

        default: return state
    }
}

export default myReducer;