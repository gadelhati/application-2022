import { Observator } from "./observator";

export interface stateObservator {
    loading: boolean,
    error: string | null,
    item: Observator,
    itens: Observator[],
}