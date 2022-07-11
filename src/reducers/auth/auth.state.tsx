import { User } from "../../components/user/user.interface";

export interface stateAuth {
    loading: boolean,
    error: string | null,
    isLoggedIn: boolean,
    user: {} | null,
    item: User,
    itens: User[],
}