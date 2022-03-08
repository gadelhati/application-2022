import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Observator } from "../../assets/interface/observator";
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/action.creator.observator';
import { initialObservator } from './observator.initial';

export const ObservationList = (props: Observator) => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState<Observator>(props)
    const { loading, error, itens, item } = useTypedSelector((state) => state.observations);

    useEffect(() => {
        retrieveItem()
    }, [dispatch, state])
    const resetItem = () => {
        setState(initialObservator)
    }
    const createItem = () => {
        dispatch(createAction(state))
    }
    const retrieveItem = () => {
        dispatch(retrieveAllAction())
    }
    const updateItem = () => {
        dispatch(updateAction(state.id, state))
    }
    const deleteItem = () => {
        dispatch(deleteAction(state.id))
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    return (
        <>
            <input
                placeholder="ID"
                aria-label="id"
                aria-describedby="basic-addon1"
                type="text"
                className="form-control"
                id="id"
                required
                value={state.id}
                onChange={handleInputChange}
                name="id"
            />
            <input
                placeholder="Name"
                aria-label="name"
                aria-describedby="basic-addon1"
                type="text"
                className="form-control"
                id="name"
                required
                // value={state.ww}
                onChange={handleInputChange}
                name="name"
            />
            <button onClick={resetItem}>Reset</button>
            <button onClick={createItem}>Create</button>
            <button onClick={retrieveItem}>Retrieve</button>
            <button onClick={updateItem}>Update</button>
            <button onClick={deleteItem}>Delete</button>
            {loading && <>Loading...</>}
            {error != null && JSON.stringify(error)}
            <table>
                <tbody>
                    {itens?.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.mimi}</td>
                                <td>{item.dw1dw1}</td>
                                <td>{item.ddddddd}</td>
                                <td><button onClick={updateItem}>Update</button></td>
                                <td><button onClick={deleteItem}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}