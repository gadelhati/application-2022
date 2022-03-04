import { OM } from "./om";

export interface stateOM {
    loading: boolean,
    error: string | null,
    item: OM,
    itens: OM[],
}