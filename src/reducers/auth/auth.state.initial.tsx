import { stateAuth } from "./auth.state";
import { initialUser } from "../../components/user/user.initial";

export const initialState: stateAuth = {
    loading: false,
    error: null,
    isLoggedIn: false,
    user: null,
    item: initialUser,
    itens: [],
}