import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Observation } from "../../assets/interface/observation";
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions/action.creator.observation';

export const UploadItem = () => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState<Observation>(initial)

    useEffect(() => {
        retrieveItem()
    }, [dispatch, state])
    const resetItem = () => {
        setState(initialObservation)
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
<CFormInput>
</div>
        </>
    );
}