import { Observation } from "../../components/observation/observation.interface";

export interface stateObservation {
    loading: boolean,
    error: string | null,
    item: Observation,
    itens: Observation[],
}