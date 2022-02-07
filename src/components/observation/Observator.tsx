import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router";

import { initialObservator } from "../initialState/initialObservator";
import { createAction, retrieveAction, updateAction, deleteAction } from "../../actions/action"

export const Observator = (props: initialObservator) => {
    const [state, setState] = useState<initialObservator>(props)
    const [message, setMessage] = useState({ expose: false, header: "", body: "" })
    // const history = useHistory()
    const dispatch = useDispatch()
    // const loading = useSelector((state => state.itens.loading))

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    // const submitItem = () => { return {...state }}
    const createItem = () => {
        dispatch(createAction(state))
        // .catch(error => {
        //     try {
        //         setMessage({ expose: true, header: "Error", body: error.response.data.errors.map(item => item.field + ": " + item.defaultMessage + ", ") })
        //     } catch {
        //         setMessage({ expose: true, header: "Error", body: error.response.data.errors })
        //     }
        // })
    }
    const retrieveItem = () => {
        dispatch(retrieveAction(state.id))
    }
    const updateItem = () => {
        dispatch(updateAction(state.id, state))
            // .then(response => {
            //     setMessage({ expose: true, header: "Updated item", body: JSON.stringify(response.data.id) })
            // })
            // .catch(error => {
            //     setMessage({ expose: true, header: "Error", body: error.response.data.errors.map(item => item.field + ": " + item.defaultMessage + ", ") })
            // })
    }
    const deleteItem = () => {
        dispatch(deleteAction(state.id))
            // .then((response: any) => {
            //     setMessage({ expose: true, header: "Deleted item", body: JSON.stringify(response.data.id) })
            //     setState(initialObservator)
            // })
            // .catch(error => {
            //     setMessage({ expose: true, header: "Error", body: JSON.stringify(error) })
            // })
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
            <button style={{ backgroundColor: 'GrayText' }} onClick={createItem}>Button</button>
            <button style={{ backgroundColor: 'GrayText' }} onClick={updateItem}>Button</button>
            <button style={{ backgroundColor: 'GrayText' }} onClick={deleteItem}>Button</button>
        </>
    );
}