import { stateAuth } from "./auth.state"
import { initialState } from "./auth.state.initial"
import { constants } from "../../assets/types/constants"
import { signinStart, signinSuccess, signinError, logoutStart, refreshTokenStart } from "../../actions/type/action.type.auth"

const user = JSON.parse(`${localStorage.getItem("user")}`)

export const authReducer = (state: stateAuth = initialState, action: signinStart | signinSuccess | signinError | logoutStart | refreshTokenStart ): stateAuth => {
  switch (action.type) {
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