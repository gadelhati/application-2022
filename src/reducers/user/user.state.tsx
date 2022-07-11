import { User } from "../../components/user/user.interface";

export interface stateUser {
    loading: boolean,
    error: string | null,
    item: User,
    itens: User[],
}