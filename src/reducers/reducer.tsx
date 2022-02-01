import { constants } from "../assets/constants/constants"
import { initialReducer } from "../components/initialState/initialReducer"

export const Reducer = (state: initialReducer, action: any) => {
    switch (action.type) {
        case constants.CREATE_START:
            return { ...state, error: false, loading: true }
        case constants.CREATE_SUCCESS:
            return { ...state, error: false, loading: false, itens: [...state.itens, action.payload] }
        case constants.CREATE_ERROR:
            return { ...state, error: true, loading: false }

        case constants.RETRIEVE_ALL_START:
            return { ...state, error: false, loading: true, item: {} }
        case constants.RETRIEVE_ALL_SUCCESS:
            return { ...state, error: false, loading: false, itens: action.payload, item: {} }
        case constants.RETRIEVE_ALL_ERROR:
            return { ...state, error: true, loading: false, itens: [], item: {} }

        case constants.RETRIEVE_START:
            return { ...state, error: false, loading: true, item: {} }
        case constants.RETRIEVE_SUCCESS:
            return { ...state, error: false, loading: false, itens: [], item: action.payload }
        case constants.RETRIEVE_ERROR:
            return { ...state, error: true, loading: false, itens: [], item: {} }

        case constants.UPDATE_START:
            return { ...state, error: false, loading: true }
        case constants.UPDATE_SUCCESS:
            return { ...state, error: false, loading: false, item: action.payload }
        case constants.UPDATE_ERROR:
            return { ...state, error: true, loading: false }

        case constants.DELETE_START:
            return { ...state, error: false, loading: true }
        case constants.DELETE_SUCCESS:
            return { ...state, error: false, loading: false, itens: state.itens.filter(item => item._id !== action.payload) }
        case constants.DELETE_ERROR:
            return { ...state, error: true, loading: false }

        case constants.DELETE_ALL_START:
            return { ...state, error: false, loading: true }
        case constants.DELETE_ALL_SUCCESS:
            return { ...state, error: false, loading: false, itens: state.itens.filter(item => item._id !== action.payload) }
        case constants.DELETE_ALL_ERROR:
            return { ...state, error: true, loading: false }

        // case constants.UPDATED_START:
        //     return { ...state, error: null }
        // case constants.UPDATED_SUCCESS:
        //     return { ...state, error: null,
        //         itens: state.itens.map(
        //             item => item._id === action.payload._id ? item = action.payload : item
        //         )
        //     }
        // case constants.UPDATED_ERROR:
        //     return { ...state, error: true }
        default:
            return state
    }
}