import { constants } from "../../assets/types/constants"

interface signupStart {
    type: constants.SIGNUP_START,
}
interface signupSuccess {
    type: constants.SIGNUP_SUCCESS,
    payload: {}
}
interface signupError {
    type: constants.SIGNUP_ERROR,
    payload: string
}
interface signinStart {
    type: constants.SIGNIN_START,
}
interface signinSuccess {
    type: constants.SIGNIN_SUCCESS,
    payload: { user: string }
}
interface signinError {
    type: constants.SIGNIN_ERROR,
    payload: string
}
interface logout {
    type: constants.LOGOUT,
}
interface refreshToken {
    type: constants.REFRESH_TOKEN,
    payload: string,
}

export type crud = signupStart | signupSuccess | signupError | signinStart | signinSuccess | signinError | logout | refreshToken