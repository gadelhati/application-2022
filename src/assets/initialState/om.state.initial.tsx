import { stateOM } from "../interface/om.state";

export const initialState: stateOM = {
    loading: false,
    error: null,
    item: { id: '', name: '' },
    itens: [],
}