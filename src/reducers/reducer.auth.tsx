import { stateAuth } from "../assets/interface/auth.state"
import { initialState } from "../assets/initialState/auth.state.initial"
import { constants } from "../assets/types/constants.auth"
import { crud } from "../actions/type/action.type.auth"

const user = JSON.parse(`${localStorage.getItem("user")}`)

export const authReducer = (state: stateAuth = initialState, action: crud): stateAuth => {
  switch (action.type) {
    case constants.SIGNUP_SUCCESS:
      return { ...state, isLoggedIn: false, }
    case constants.SIGNUP_ERROR:
      return { ...state, isLoggedIn: false, };

    case constants.SIGNIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: action.payload.user, };
    case constants.SIGNIN_ERROR:
      return { ...state, isLoggedIn: false, user: null, };
      
    case constants.LOGOUT:
      return { ...state, isLoggedIn: false, user: null, };
    case constants.REFRESH_TOKEN:
      return { ...state, user: { ...user, accessToken: action.payload }, };
    default:
      return state;
  }
}