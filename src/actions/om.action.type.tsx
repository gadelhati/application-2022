import { OM } from "../assets/interface/om"
import { constants } from "../assets/types/constants"

interface createStart {
    type: constants.CREATE_START,
}
interface createSuccess {
    type: constants.CREATE_SUCCESS,
    payload: OM
}
interface createError {
    type: constants.CREATE_ERROR,
    payload: {}
}
interface retrieveAllStart {
    type: constants.RETRIEVE_ALL_START,
}
interface retrieveAllSuccess {
    type: constants.RETRIEVE_ALL_SUCCESS,
    payload: OM[]
}
interface retrieveAllError {
    type: constants.RETRIEVE_ALL_ERROR,
    payload: {}
}

export type crud = createStart | createSuccess | createError | retrieveAllStart | retrieveAllSuccess | retrieveAllError