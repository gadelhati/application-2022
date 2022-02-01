import { constants } from "../assets/types/constants"

const user = JSON.parse(localStorage.getItem("user"))

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }

export default function auth(state = initialState, action: any) {
  const { type, payload } = action

  switch (type) {
    case constants.SIGNUP_SUCCESS:
      return { ...state, isLoggedIn: false, }
    case constants.SIGNUP_ERROR:
      return { ...state, isLoggedIn: false, };

    case constants.SIGNIN_SUCCESS:
      return { ...state, isLoggedIn: true, user: payload.user, };
    case constants.SIGNIN_ERROR:
      return { ...state, isLoggedIn: false, user: null, };
      
    case constants.LOGOUT:
      return { ...state, isLoggedIn: false, user: null, };
    case constants.REFRESH_TOKEN:
      return { ...state, user: { ...user, accessToken: payload }, };
    default:
      return state;
  }
}