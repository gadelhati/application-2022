import { Auth } from "./auth";

export interface stateAuth {
    loading: boolean,
    error: string | null,
    isLoggedIn: boolean,
    user: {} | null,
    item: Auth,
    itens: Auth[],
}