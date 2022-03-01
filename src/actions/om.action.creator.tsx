import { Dispatch } from "redux";
import { useQuery } from "../assets/hook/useQuery";
import { crud } from "./om.action.type";
import { constants } from "../assets/types/constants";
import { OM } from "../assets/interface/om"
import { create, retrieve, getRetrieve, getAll, update, remove, removeAll } from "../services/om.service"

export const createAction = (om: OM) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.CREATE_START
        });
        try {
            const { data } = await create(om);
            dispatch({
                type: constants.CREATE_SUCCESS,
                payload: data
            })
            return data;
        } catch(error: any) {
            dispatch({
                type: constants.CREATE_ERROR,
                payload: error.message
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
            // const { data } = useQuery<OM[] | undefined>('/om/retrieve')
            dispatch({
                type: constants.RETRIEVE_ALL_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            dispatch({
                type: constants.RETRIEVE_ALL_ERROR,
                payload: error.message
            });

        }
    }
}

export const updateAction = (id: string, om: OM) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.CREATE_START
        });
        try {
            const { data } = await update(id, om);
            dispatch({
                type: constants.CREATE_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            dispatch({
                type: constants.CREATE_ERROR,
                payload: error.message
            });
        }
    }
}

export const deleteAction = (id: string) => {
    return async (dispatch: Dispatch<crud>) => {
        dispatch({
            type: constants.CREATE_START
        });
        try {
            const { data } = await remove(id);
            dispatch({
                type: constants.CREATE_SUCCESS,
                payload: data
            });
        } catch(error: any) {
            dispatch({
                type: constants.CREATE_ERROR,
                payload: error.message
            });
        }
    }
}