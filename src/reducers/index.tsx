import { combineReducers  } from "redux"
import { authReducer } from "./auth.reducer"
import { omReducer } from "./om.reducer"

export const reducers = combineReducers({ 
    authReducer: authReducer,
    oms: omReducer,
})

export type RootState = ReturnType<typeof reducers>
export type AppDispatch = typeof reducers