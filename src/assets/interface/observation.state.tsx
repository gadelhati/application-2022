import { Observation } from "./observation";

export interface stateObservation {
    loading: boolean,
    error: string | null,
    item: Observation,
    itens: Observation[],
}