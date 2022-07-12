import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions.generics/creator/action.creator.user';
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import '../list.css'

export const UserList = (props: User) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<User>(initialUser)
    const { loading, error, itens, item } = useTypedSelector((state) => state.users);
    const { loading: loadingOM, error: errorOM, itens: itensOM, item: itemOM } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        retrieveItem()
    }, [dispatch])
    const selectItem = (object: User) => {
        setState(object)
    }
    const resetItem = () => {
        setState(initialUser)
    }
    const createItem = () => {
        dispatch(createAction(state))
        resetItem()
    }
    const retrieveItem = () => {
        resetItem()
        dispatch(retrieveAllAction())
    }
    const updateItem = () => {
        dispatch(updateAction(state.id, state))
        resetItem()
    }
    const deleteItem = () => {
        dispatch(deleteAction(state.id))
        resetItem()
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setState({ ...state, [name]: value })
    }
    return (
        <section>
            <article>
                {/* <div className="form-floating">
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
                </div> */}
                <div className="form-floating">
                    <input
                        placeholder="USERNAME"
                        aria-label="username"
                        aria-describedby="basic-addon1"
                        type="text"
                        className="form-control"
                        // className={state.name == "" ? "form-control is-invalid" : "form-control is-valid"}
                        id="username"
                        required
                        value={state.username}
                        onChange={handleInputChange}
                        name="username"
                    />
                    <label htmlFor="username">Username</label>
                    {/* <div className="valid-feedback">Looks good!</div> */}
                    {/* <div className="invalid-feedback">Looks bad!</div> */}
                </div>
                <div className="form-floating">
                    <input
                        placeholder="E-MAIL"
                        aria-label="email"
                        aria-describedby="basic-addon1"
                        type="email"
                        className="form-control"
                        id="email"
                        required
                        value={state.email}
                        onChange={handleInputChange}
                        name="email"
                    />
                    <label htmlFor="email">E-mail</label>
                </div>
                <div className="form-floating">
                    <input
                        placeholder="PASSWORD"
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        value={state.password}
                        onChange={handleInputChange}
                        name="password"
                        readOnly={state.id != ""}
                    />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="form-check">
                    <input
                        placeholder="ACTIVE"
                        aria-label="active"
                        aria-describedby="basic-addon1"
                        type="checkbox"
                        className="form-check-input"
                        id="active"
                        required
                        checked={state.active}
                        onChange={handleInputChange}
                        name="active"
                    />
                    <label className="form-check-label" htmlFor="active">Active</label>
                </div>
                {/* <div className="form-floating">
                    <select className="form-select" id="om" name="om" aria-label="Floating label select"  onChange={handleInputChange} >
                        {itensOM.map((option) => (
                            <option value={state.OM}>{option.name}</option>
                        ))}
                    </select>
                    <label htmlFor="om">OM</label>
                </div> */}
                <button onClick={resetItem} className="w-20 btn btn-secondary">Reset</button>
                <button onClick={createItem} className="w-20 btn btn-secondary" disabled={state.id != ""} >Create</button>
                <button onClick={retrieveItem} className="w-20 btn btn-secondary" >Retrieve</button>
                <button onClick={updateItem} className="w-20 btn btn-primary" disabled={state.id == ""} >Update</button>
                <button onClick={deleteItem} className="w-20 btn btn-danger" disabled={state.id == ""} >Delete</button>
                {loading && <>Loading...</>}
                {error != null && JSON.stringify(error)}
            </article>
            <table>
                <thead>
                    <tr>
                        {/* <th scope="col">ID</th> */}
                        <th scope="col">USERNAME</th>
                        <th scope="col">E-MAIL</th>
                        <th scope="col">ACTIVE</th>
                        <th scope="col">#</th>
                    </tr>
                </thead>
                <tbody>
                    {itens?.map(item => {
                        return (
                            <tr key={item.id}>
                                {/* <th scope="row">{item.id}</th> */}
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>
                                    <input type="checkbox" value="active" id="active" disabled checked={item.active}></input>
                                </td>
                                <td className="align-bottom">
                                    <button onClick={() => selectItem(item)} className="w-100 btn btn-lg btn-secondary">Select</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>
    );
}