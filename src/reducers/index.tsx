import { combineReducers  } from "redux"
import auth from "./reducer.auth"
import { Reducer } from "./reducer"

export default combineReducers({ 
    auth,
    itens: Reducer,
})