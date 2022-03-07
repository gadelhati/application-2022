import { Dispatch } from "redux";
import { crud } from "./type/auth.action.type";
import { constants } from "../assets/types/constants.auth";
import { signup, signin, logout, refreshToken } from "../services/auth.service"
import { OM } from "../assets/interface/om";

export const signupAction = (om: OM, username: string, email: string, password: string) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.SIGNUP_START
        });
        try {
            const { data } = await signup(om, username, email, password);
            dispatch({
                type: constants.SIGNUP_SUCCESS,
                payload: data
            })
        } catch(error: any) {
            dispatch({
                type: constants.SIGNUP_ERROR,
                payload: error.response.data.errors
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
            dispatch({
                type: constants.SIGNIN_ERROR,
                payload: error.message
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