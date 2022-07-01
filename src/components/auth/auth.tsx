import { OM } from "../om/om.interface";

export interface Auth {
    om: OM,
    username: string,
    email: string,
    password: string,
}