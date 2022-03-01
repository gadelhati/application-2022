import React, { useState, ChangeEvent, useEffect } from 'react';
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../actions/om.action.creator';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useTypedSelector } from '../assets/hook/useTypeSelector';
import { OM } from '../assets/interface/om';
import { initialOM } from '../assets/initialState/om.initial';
import ErrorBoundary from '../assets/helpers/error.boudary';

export function OM2() {
    // const dispatch = useAppDispatch();
    const dispatch = useDispatch();
    const [ state, setState ] = useState(initialOM)
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        dispatch(retrieveAllAction)
    }, [dispatch])

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
        {itens}
            <form onSubmit={onSubmitHandler}>
                {/* <input type={"text"} value={postId} onChange={(e) => setState(e.target.value)} /> */}
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
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <ErrorBoundary>
                    <ul>
                        {/* {
                            // interface IKeys { id: string; name: string }
                            // array.map(val => <IKeys>{
                            itens.map((item: any): OM => ({
                                id: item.id,
                                name: item.name,
                            }))
                        } */}
                        {/* {itens.map(item => {item.name})} */}
                        {JSON.stringify(itens)}
                    </ul>
                    </ErrorBoundary>
                )
            }
            <button style={{ backgroundColor: 'GrayText' }} onClick={createItem}>Button</button>
            <button style={{ backgroundColor: 'GrayText' }} onClick={updateItem}>Button</button>
            <button style={{ backgroundColor: 'GrayText' }} onClick={deleteItem}>Button</button>
        </>
    );
}