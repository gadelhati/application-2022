import { Observation } from "../../components/observation/observation";

export interface stateObservation {
    loading: boolean,
    error: string | null,
    item: Observation,
    itens: Observation[],
}