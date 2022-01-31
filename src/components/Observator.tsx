import { useState } from "react";
import { initialObservator } from "../initialState/initialObservator";

export const Observator = (props: initialObservator) => {
    const [state, setState] = useState<initialObservator>(props)    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    // const submitItem = () => { return {...state }}
    const create = () => {
        // dispatch(createActions(state))
    }

    return(
        <>Hi {state.email}
            <input
                placeholder="E-mail"
                aria-label="email"
                aria-describedby="basic-addon1"
                type="text"
                className="form-control"
                id="email"
                required
                value={state.email}
                onChange={handleInputChange}
                name="email"
            />
            <button style={{ backgroundColor: 'GrayText' }} onClick={create}>Button</button>
        </>
    );
}