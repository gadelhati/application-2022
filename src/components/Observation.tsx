import { useState } from "react";
import { initialObservation } from "../initialState/initialObservation";

export const Observation = (props: initialObservation) => {
    const [state, setState] = useState<initialObservation>(props)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    return(
        <>{state.mimi}</>
    );
}