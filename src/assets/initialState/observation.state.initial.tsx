import { initialObservation } from "../../components/observation/observation.initial";
import { stateObservation } from "../interface/observation.state";

export const initialState: stateObservation = {
    loading: false,
    error: null,
    item: initialObservation,
    itens: [],
}