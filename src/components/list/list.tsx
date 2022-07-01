import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { OM } from "./om.interface";
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/creator/action.creator.om';
import { initialOM } from './om.initial';

export const OneList = (props: OM) => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState<OM>(props)
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        retrieveItem()
    }, [dispatch])
    const selectItem = (object: OM) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialOM)
    }
    const createItem = () => {
        dispatch(createAction(state))
        resetItem()
    }
    const retrieveItem = () => {
        dispatch(retrieveAllAction())
        resetItem()
    }
    const updateItem = () => {
        dispatch(updateAction(state.id, state))
        // retrieveItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction(state.id))
        // retrieveItem()
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    return (
        <>
            <div className="form-floating">
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
                    readOnly
                />
                <label htmlFor="id">ID</label>
            </div>
            <div className="form-floating">
                <input
                    placeholder="Name"
                    aria-label="name"
                    aria-describedby="basic-addon1"
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    value={state.name}
                    onChange={handleInputChange}
                    name="name"
                />
                <label htmlFor="name">Name</label>
            </div>
            <button onClick={resetItem}>Reset</button>
            <button onClick={createItem} disabled={state.id != ""} >Create</button>
            <button onClick={retrieveItem}>Retrieve</button>
            <button onClick={updateItem} disabled={state.id == ""} >Update</button>
            <button onClick={deleteItem} disabled={state.id == ""} >Delete</button>
            {loading && <>Loading...</>}
            {error != null && JSON.stringify(error)}
            <table className="table table-striped table-hover">
                <tbody>
                    {itens?.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><button onClick={() =>selectItem(item)}>Select</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}