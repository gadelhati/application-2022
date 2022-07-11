import { User } from "../../components/auth/user.interface";

export interface stateUser {
    loading: boolean,
    error: string | null,
    item: User,
    itens: User[],
}