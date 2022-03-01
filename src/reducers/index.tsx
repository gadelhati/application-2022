import { combineReducers  } from "redux"
import auth from "./reducer.auth"
import { Reducer } from "./reducer"
import { omReducer } from "../actions/om.reducer"

export const reducers = combineReducers({ 
    // auth: auth,
    oms: omReducer,
    // itens: Reducer,
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof reducers