import { Dispatch } from "redux";
import { crud } from "../type/action.type.om";
import { constants } from "../../assets/types/constants";
import { OM } from "../../components/om/om.interface"
import { create, retrieve, getRetrieve, getAll, update, remove, removeAll } from "../../services/service.om"
import { useQuery } from "../../assets/hook/useQuery";

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
                payload: error.response.data.errors
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

// export const updatedAction = (item) => {
//     return (dispatch) => {
//         dispatch(updatedStart())
//         service.update(item.id, item)
//             .then(response => {
//                 console.log("edição ok")
//                 dispatch(updatedSuccess(response.data))
//             })
//             .catch(error => {
//                 console.log("erro ao editar")
//                 dispatch(updatedError())
//             })
//     }
// }
// export const updatedStart = () => ({
//     type: constants.UPDATED_START
// })
// export const updatedSuccess = item => ({
//     type: constants.UPDATED_SUCCESS,
//     payload: item
// })
// export const updatedError = () => ({
//     type: constants.UPDATED_ERROR
// })


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