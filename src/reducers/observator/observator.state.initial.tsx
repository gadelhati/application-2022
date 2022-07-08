import { initialObservator } from "../../components/observator/observator.initial";
import { stateObservator } from "./observator.state";

export const initialState: stateObservator = {
    loading: false,
    error: null,
    item: initialObservator,
    itens: [],
}