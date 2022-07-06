import { Dispatch } from "redux";
import { crud } from "../type/action.type.om";
import { constants } from "../../assets/types/constants";
import { OM } from "../../components/om/om.interface"
import { create, retrieve, getRetrieve, getAll, update, remove, removeAll } from "../../services/service.om"

export const createAction = (object: OM) => {
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
            dispatch({
                type: constants.CREATE_ERROR,
                payload: error.message
            });
        }
    }
}

export const retrieveAllAction = () => {
    return async (dispatch: Dispatch<crud>) => {
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
            dispatch({
                type: constants.RETRIEVE_ALL_ERROR,
                payload: error.message
            });

        }
    }
}

export const updateAction = (id: string, object: OM) => {
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
            dispatch({
                type: constants.UPDATE_ERROR,
                payload: error.message
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
            dispatch({
                type: constants.DELETE_ERROR,
                payload: error.message
            });
        }
    }
}

// export const findTutorialsByTitle = (title) => async (dispatch) => {
//     try {
//       const res = await TutorialDataService.findByTitle(title)
//       dispatch({
//         type: RETRIEVE_TUTORIALS,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err)
//     }
//   }