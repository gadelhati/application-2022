import { Auth } from "../interface/auth";
import { initialOM } from "./om.initial";

export const initialAuth : Auth = {
    om: initialOM,
    username: '',
    email: '',
    password: '',
}