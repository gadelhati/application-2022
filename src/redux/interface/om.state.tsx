import { OM } from "../../components/om/om.interface";

export interface stateOM {
    loading: boolean,
    error: string | null,
    item: OM,
    itens: OM[],
}