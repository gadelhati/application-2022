import { stateOM } from "./om.state";
import { initialState } from "./om.state.initial";
import { constants } from "../../assets/types/constants"
import { crud } from "../../actions.generics/type/action.type.om"

export const omReducer = (state: stateOM = initialState, action: crud): stateOM => {
    switch (action.type) {
        case constants.CREATE_START:
            return { ...state, error: null, loading: true }
        case constants.CREATE_SUCCESS:
            return { ...state, error: null, loading: false, itens: [...state.itens, action.payload], item: action.payload }
        case constants.CREATE_ERROR:
            return { ...state, error: action.payload, loading: false }

        case constants.RETRIEVE_ALL_START:
            return { ...state, error: null, loading: true }
        case constants.RETRIEVE_ALL_SUCCESS:
            return { ...state, error: null, loading: false, itens: action.payload }
        case constants.RETRIEVE_ALL_ERROR:
            return { ...state, error: action.payload, loading: false }

        // case constants.RETRIEVE_START:
        //     return { ...state, error: null, loading: true }
        // case constants.RETRIEVE_SUCCESS:
        //     return { ...state, error: null, loading: false, itens: [...state.itens], item: action.payload }
        // case constants.RETRIEVE_ERROR:
        //     return { ...state, error: action.payload, loading: false, itens: [], item: {} }

        case constants.UPDATE_START:
            return { ...state, error: null, loading: true }
        case constants.UPDATE_SUCCESS:
            return { ...state, error: null, loading: false, itens: [...state.itens.filter(item => item.id !== action.payload.id), action.payload], item: action.payload }
        case constants.UPDATE_ERROR:
            return { ...state, error: action.payload, loading: false }

        case constants.DELETE_START:
            return { ...state, error: null, loading: true }
        case constants.DELETE_SUCCESS:
            return { ...state, error: null, loading: false, itens: state.itens.filter(item => item.id !== action.payload.id) }
        case constants.DELETE_ERROR:
            return { ...state, error: action.payload, loading: false }

        // case constants.DELETE_ALL_START:
        //     return { ...state, error: null, loading: true }
        // case constants.DELETE_ALL_SUCCESS:
        //     return { ...state, error: null, loading: false, itens: state.itens }
        // case constants.DELETE_ALL_ERROR:
        //     return { ...state, error: action.payload, loading: false }

        default:
            return state
    }
}