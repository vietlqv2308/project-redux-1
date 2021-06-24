import { combineReducers } from "redux"
import userTodosSlice from "../pages/User/redux-toolkit"
import productTodosSlice from "../pages/Product/slice"

const rootReducer = combineReducers({
  user: userTodosSlice,
  product: productTodosSlice
})

export default rootReducer
