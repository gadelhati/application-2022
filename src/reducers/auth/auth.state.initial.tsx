import { stateAuth } from "./auth.state";
import { initialAuth } from "../../components/auth/auth.initial";

export const initialState: stateAuth = {
    loading: false,
    error: null,
    isLoggedIn: false,
    user: null,
    item: initialAuth,
    itens: [],
}