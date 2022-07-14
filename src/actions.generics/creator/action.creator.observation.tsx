import { Dispatch } from "redux";
import { crud } from "../type/action.type.observation";
import { constants } from "../../assets/types/constants";
import { Observation } from "../../components/observation/observation.interface"
import { create, createAll, retrieve, getRetrieve, getAll, update, remove, removeAll } from "../../services/service.observation"

export const createAction = (object: Observation) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.CREATE_START
        });
        try {
            const { data } = await create(object);
            dispatch({
                type: constants.CREATE_SUCCESS,
                payload: data
            })
        } catch(error: any) {
            if(error.response.data.errors != undefined){
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.CREATE_ERROR,
                payload: error
            });
        }
    }
}

export const createAllAction = (object: Observation[]) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.CREATE_ALL_START
        });
        try {
            const { data } = await createAll(object);
            dispatch({
                type: constants.CREATE_ALL_SUCCESS,
                payload: data
            })
        } catch(error: any) {
            if(error.response.data.errors != undefined){
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.CREATE_ALL_ERROR,
                payload: error
            });
        }
    }
}

export const retrieveAllAction = () => {
    return async (dispatch: any) => {
        dispatch({
            type: constants.RETRIEVE_ALL_START
        });
        try {
            const { data } = await getRetrieve()
            dispatch({
                type: constants.RETRIEVE_ALL_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            if(error.response.data.errors != undefined){
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.RETRIEVE_ALL_ERROR,
                payload: error
            });

        }
    }
}

export const updateAction = (id: string, object: Observation) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.UPDATE_START
        });
        try {
            const { data } = await update(id, object);
            dispatch({
                type: constants.UPDATE_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            if(error.response.data.errors != undefined){
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.UPDATE_ERROR,
                payload: error
            });
        }
    }
}

export const deleteAction = (id: string) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.DELETE_START
        });
        try {
            const { data } = await remove(id);
            dispatch({
                type: constants.DELETE_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            if(error.response.data.errors != undefined){
                error.response?.data.errors.map((element: any) => { error = element.field + ": " + element.defaultMessage })
            } else {
                error = error.response.data.error
            }
            dispatch({
                type: constants.DELETE_ERROR,
                payload: error
            });
        }
    }
}