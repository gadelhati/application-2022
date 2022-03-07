import { stateAuth } from "../interface/auth.state";

export const initialState: stateAuth = {
    loading: false,
    error: null,
    isLoggedIn: false,
    user: null,
    item: { username: '', email: '', password: '' },
    itens: [],
}