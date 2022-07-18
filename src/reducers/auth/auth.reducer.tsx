import { stateAuth } from "./auth.state"
import { initialState } from "./auth.state.initial"
import { constants } from "../../assets/types/constants"
import { crud } from "../../actions.generics/type/action.type.auth"

const user = JSON.parse(`${localStorage.getItem("user")}`)

export const authReducer = (state: stateAuth = initialState, action: crud): stateAuth => {
  switch (action.type) {
    // case constants.SIGNUP_START:
    //   return { ...state, error: null, loading: true }
    // case constants.SIGNUP_SUCCESS:
    //   return { ...state, error: null, loading: false, itens: [...state.itens, action.payload], item: action.payload, isLoggedIn: true }
    // case constants.SIGNUP_ERROR:
    //   return { ...state, error: action.payload, loading: false, isLoggedIn: false };

    case constants.SIGNIN_START:
      return { ...state, error: null, loading: true, isLoggedIn: true };
    case constants.SIGNIN_SUCCESS:
      return { ...state, error: null, loading: false, isLoggedIn: true, item: action.payload, };
    case constants.SIGNIN_ERROR:
      return { ...state, error: action.payload, loading: false, isLoggedIn: false };

    case constants.LOGOUT:
      return { ...state, isLoggedIn: false };
    case constants.REFRESH_TOKEN:
      return { ...state, /*user: { ...user, accessToken: action.payload },*/ };
    default:
      return state;
  }
}