import React, { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { OM } from "../../assets/interface/om";
import { useQuery } from "../../assets/hook/useQuery";
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/om.action.creator';
import { initialOM } from '../../assets/initialState/om.initial';

export const OMList = (props: OM | null) => {
    const { data: oms, isQuery } = useQuery<OM[]>('/om/retrieve')
    const dispatch = useDispatch();
    const [state, setState] = useState(initialOM)
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        retrieveItem()
    }, [dispatch, state])
    const resetItem = () => {
        setState(initialOM)
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
                value={state.name}
                onChange={handleInputChange}
                name="name"
            />
            <button onClick={resetItem}>Reset</button>
            <button onClick={createItem}>Create</button>
            <button onClick={retrieveItem}>Retrieve</button>
            <button onClick={updateItem}>Update</button>
            <button onClick={deleteItem}>Delete</button>
            {loading && <>Carregando...</>}
            <table>
                {itens?.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            {/* <td><input type="button" onClick={updateItem} key={item.id}>Update</input></td>
                            <td><input type="button" onClick={deleteItem} key={item.id}> kDelete</input></td> */}
                            {/* <td><Button href={`/item/${item.id}`} variant="secondary" key={item.id} item={item} > More </button></td> */}
                            {/* <td><button href={`/item/${item.id}`} variant="secondary" key={item.id} item={item} > More </button></td> */}
                            <td><button onClick={updateItem}>Update</button></td>
                            <td><button onClick={deleteItem}>Delete</button></td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
}