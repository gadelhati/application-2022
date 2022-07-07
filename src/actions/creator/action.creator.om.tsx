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
            const { data, headers, config, status, statusText, request } = await create(object);
            // console.log("Data: " + JSON.stringify(data))
            // console.log("Headers: " + JSON.stringify(headers))
            // console.log("Config: " + JSON.stringify(config))
            // console.log("Status: " + JSON.stringify(status))
            // console.log("StatusText: " + JSON.stringify(statusText))
            // console.log("Request: " + JSON.stringify(request))
            dispatch({
                type: constants.CREATE_SUCCESS,
                payload: data
            })
        } catch(error: any) {
            dispatch({
                type: constants.CREATE_ERROR,
                payload: error.message
            });
            console.log(JSON.stringify("All: " + JSON.stringify(error.message)))
            console.log(JSON.stringify("Message: " + error.message))
            console.log(JSON.stringify("Name: " + error.name))
            console.log(JSON.stringify("FileName: " + error.fileName))
            console.log(JSON.stringify("LineNumber: " + error.lineNumber))
            console.log(JSON.stringify("ColumnNumber: " + error.columnNumber))
            console.log(JSON.stringify("Stack: " + error.stack))
            console.log(JSON.stringify("Config: " + error.config))
            console.log(JSON.stringify("Status: " + error.status))
            // console.log(JSON.stringify("Errors: " + error.data))
            // console.log(JSON.stringify(errors.map(item => item.field + ": " + item.defaultMessage + ", ")))
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