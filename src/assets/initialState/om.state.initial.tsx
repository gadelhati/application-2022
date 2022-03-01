import { stateOM } from "../interface/om.state";

export const initialState: stateOM = {
    loading: false,
    error: false,
    item: { id: '', name: '' },
    itens: [],
}