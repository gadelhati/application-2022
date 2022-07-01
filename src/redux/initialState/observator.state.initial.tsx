import { initialObservator } from "../../components/observator/observator.initial";
import { stateObservator } from "../interface/observator.state";

export const initialState: stateObservator = {
    loading: false,
    error: null,
    item: initialObservator,
    itens: [],
}