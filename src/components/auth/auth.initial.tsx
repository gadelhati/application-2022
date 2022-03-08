import { Auth } from "../../assets/interface/auth";
import { initialOM } from "../om/om.initial";

export const initialAuth : Auth = {
    om: initialOM,
    username: '',
    email: '',
    password: '',
}