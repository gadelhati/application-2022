import { Observator } from "../../components/observator/observator";

export interface stateObservator {
    loading: boolean,
    error: string | null,
    item: Observator,
    itens: Observator[],
}