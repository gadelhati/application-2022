import { constants } from "../assets/types/constants"
import { signin, signup, logout } from "../services/service.auth"

export const signupActions = (username: string, email: string, password: string) => async (dispatch: any) => {
    dispatch(signupStart())
    try {
        const response = await signup(username, email, password)
        dispatch(signupSuccess(response.data))
        return Promise.resolve(response.data)
    } catch (error) {
        dispatch(signupError(error))
        return Promise.reject(error)
    }
}
export const signupStart = () => ({
    type: constants.SIGNUP_START,
})
export const signupSuccess = (response: any) => ({
    type: constants.SIGNUP_SUCCESS,
    payload: response
})
export const signupError = (error: any) => ({
    type: constants.SIGNUP_ERROR,
    payload: error
})

export const signinActions = (username: string, password: string) => async (dispatch: any) => {
    dispatch(signinStart())
    try {
        const response = await signin(username, password)
        dispatch(signinSuccess(response.data))
        return Promise.resolve(response.data)
    } catch (error) {
        dispatch(signinError(error))
        return Promise.reject(error)
    }
}
export const signinStart = () => ({
    type: constants.SIGNIN_START,
})
export const signinSuccess = (response: any) => ({
    type: constants.SIGNIN_SUCCESS,
    payload: { user: response }
})
export const signinError = (error: any) => ({
    type: constants.SIGNIN_ERROR,
    payload: error
})

export const logoutActions = () => (dispatch: any) => {
  logout()
  dispatch({
    type: constants.LOGOUT,
  })
}

export const refreshTokenActions = (accessToken: any) => (dispatch: any) => {
  dispatch({
    type: constants.REFRESH_TOKEN,
    payload: accessToken,
  })
}