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
        dispatch(retrieveAllAction)
    }, [dispatch, state])

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }

    const createItem = () => {
        dispatch(createAction(state))
    }
    const updateItem = () => {
        dispatch(updateAction(state.id, state))
    }
    const deleteItem = () => {
        dispatch(deleteAction(state.id))
    }

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const sim = dispatch(retrieveAllAction());
        console.log(sim)
    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
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
                <button type="submit"> submit </button>
            </form>
            <ul>
                <button /*style={{ backgroundColor: 'GrayText' }}*/ onClick={createItem}>Create</button>
                <button /*style={{ backgroundColor: 'GrayText' }}*/ onClick={updateItem}>Update</button>
                <button /*style={{ backgroundColor: 'GrayText' }}*/ onClick={deleteItem}>Delete</button>
                {isQuery && <>Carregando...</>}
                {oms?.map(om => {
                    return (
                        <li key={om.id}>
                            <strong>{om.id}</strong>
                            <p>{om.name}</p>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}