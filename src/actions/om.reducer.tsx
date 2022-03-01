import { stateOM } from "../assets/interface/om.state"
import { initialState } from "../assets/initialState/om.state.initial"
import { constants } from "../assets/types/constants"
import { crud } from "./om.action.type"

export const omReducer = (state: stateOM = initialState, action: crud): stateOM => {
    switch (action.type) {
        case constants.CREATE_START:
            return { ...state, error: false, loading: true }
        case constants.CREATE_SUCCESS:
            return { ...state, error: false, loading: false, itens: [...state.itens, action.payload], item: action.payload }
        case constants.CREATE_ERROR:
            return { ...state, error: true, loading: false }

        case constants.RETRIEVE_ALL_START:
            return { ...state, error: false, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS:
            return { ...state, error: false, loading: false, itens: action.payload }
        case constants.RETRIEVE_ALL_ERROR:
            return { ...state, error: true, loading: false }

        // case constants.RETRIEVE_START:
        //     return { ...state, error: false, loading: true, item: {} }
        // case constants.RETRIEVE_SUCCESS:
        //     return { ...state, error: false, loading: false, itens: [], item: action.payload }
        // case constants.RETRIEVE_ERROR:
        //     return { ...state, error: true, loading: false, itens: [], item: {} }

        // case constants.UPDATE_START:
        //     return { ...state, error: false, loading: true }
        // case constants.UPDATE_SUCCESS:
        //     return { ...state, error: false, loading: false, item: action.payload }
        // case constants.UPDATE_ERROR:
        //     return { ...state, error: true, loading: false }

        // case constants.DELETE_START:
        //     return { ...state, error: false, loading: true }
        // case constants.DELETE_SUCCESS:
        //     return { ...state, error: false, loading: false, itens: state.itens }
        // case constants.DELETE_ERROR:
        //     return { ...state, error: true, loading: false }

        // case constants.DELETE_ALL_START:
        //     return { ...state, error: false, loading: true }
        // case constants.DELETE_ALL_SUCCESS:
        //     return { ...state, error: false, loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR:
        //     return { ...state, error: true, loading: false }

        default:
            return state
    }
}