import { combineReducers  } from "redux"
import { authReducer } from "./reducer.auth"
import { omReducer } from "./reducer.om"
import { observationReducer } from "./reducer.observation"

export const reducers = combineReducers({ 
    auths: authReducer,
    oms: omReducer,
    observations: observationReducer,
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof reducers