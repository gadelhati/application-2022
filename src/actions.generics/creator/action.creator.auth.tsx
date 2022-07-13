import { Dispatch } from "redux";
import { crud } from "../type/action.type.auth";
import { constants } from "../../assets/types/constants";
import { signup, signin, logout, refreshToken } from "../../services/service.auth"

export const signupAction = (username: string, email: string, password: string) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.SIGNUP_START
        });
        try {
            const { data } = await signup(username, email, password);
            dispatch({
                type: constants.SIGNUP_SUCCESS,
                payload: data
            })
        } catch(error: any) {
            if(error.response.data.errors != undefined){
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.SIGNUP_ERROR,
                payload: error
            });
        }
    }
}

export const signinAction = (username: string, password: string) => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.SIGNIN_START
        });
        try {
            const { data } = await signin(username, password)
            dispatch({
                type: constants.SIGNIN_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            if(error.response.data.errors != undefined){
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.SIGNIN_ERROR,
                payload: error
            });

        }
    }
}

export const logoutAction = () => {
    return async (dispatch: Dispatch<crud>) => {
        logout()
        dispatch({
            type: constants.LOGOUT
        });
    }
}

export const refreshTokenAction = (accessToken: any) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.REFRESH_TOKEN,
            payload: accessToken
        });
    }
}