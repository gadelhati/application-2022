import { initialUser } from "../../components/user/user.initial";
import { stateUser } from "./user.state";

export const initialState: stateUser = {
    loading: false,
    error: null,
    item: initialUser,
    itens: [],
}