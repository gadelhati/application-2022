import { stateAuth } from "../interface/auth.state";
import { initialOM } from "./om.initial";

export const initialState: stateAuth = {
    loading: false,
    error: null,
    isLoggedIn: false,
    user: null,
    item: { om: initialOM, username: '', email: '', password: '' },
    itens: [],
}