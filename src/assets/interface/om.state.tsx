import { OM } from "./om";

export interface stateOM {
    loading: boolean,
    error: boolean,
    item: OM,
    itens: OM[],
}