import { initialOM } from "../../components/om/om.initial";
import { stateOM } from "./om.state";

export const initialState: stateOM = {
    loading: false,
    error: null,
    item: initialOM,
    itens: [],
}