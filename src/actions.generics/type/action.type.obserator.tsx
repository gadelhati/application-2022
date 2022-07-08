import { Observator } from "../../components/observator/observator"
import { constants } from "../../assets/types/constants"

interface createStart {
    type: constants.CREATE_START,
}
interface createSuccess {
    type: constants.CREATE_SUCCESS,
    payload: Observator
}
interface createError {
    type: constants.CREATE_ERROR,
    payload: string
}
interface retrieveStart {
    type: constants.RETRIEVE_START,
}
interface retrieveSuccess {
    type: constants.RETRIEVE_SUCCESS,
    payload: Observator
}
interface retrieveError {
    type: constants.RETRIEVE_ERROR,
    payload: string
}
interface retrieveAllStart {
    type: constants.RETRIEVE_ALL_START,
}
interface retrieveAllSuccess {
    type: constants.RETRIEVE_ALL_SUCCESS,
    payload: Observator[]
}
interface retrieveAllError {
    type: constants.RETRIEVE_ALL_ERROR,
    payload: string
}
interface updateStart {
    type: constants.UPDATE_START,
}
interface updateSuccess {
    type: constants.UPDATE_SUCCESS,
    payload: Observator
}
interface updateError {
    type: constants.UPDATE_ERROR,
    payload: string
}
interface deleteStart {
    type: constants.DELETE_START,
}
interface deleteSuccess {
    type: constants.DELETE_SUCCESS,
    payload: Observator
}
interface deleteError {
    type: constants.DELETE_ERROR,
    payload: string
}
interface deleteAllStart {
    type: constants.DELETE_START,
}
interface deleteAllSuccess {
    type: constants.DELETE_SUCCESS,
    payload: Observator
}
interface deleteAllError {
    type: constants.DELETE_ERROR,
    payload: string
}

export type crud = createStart | createSuccess | createError | retrieveAllStart | retrieveAllSuccess | retrieveAllError | retrieveStart | retrieveSuccess | retrieveError | updateStart | updateSuccess | updateError | deleteStart | deleteSuccess | deleteError | deleteAllStart | deleteAllSuccess | deleteAllError