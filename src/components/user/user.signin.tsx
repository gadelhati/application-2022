import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { signupAction, signinAction, logoutAction, refreshTokenAction } from '../../actions.generics/creator/action.creator.auth'
import { User } from "./user.interface";
import { initialUser } from './user.initial';
import '../list.css'

export const UserSignin = (props: User) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<User>(initialUser)
    const { loading, error, itens, item } = useTypedSelector((state) => state.users);

    useEffect(() => {
        // retrieveItem()
    }, [dispatch])
    const resetItem = () => {
        setState(initialUser)
    }
    const signinItem = () => {
        dispatch(signinAction(state.username, state.password))
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name } = event.target
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setState({ ...state, [name]: value })
    }
    return (
        <section>
            <article>
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
                <button onClick={resetItem} className="w-20 btn btn-secondary">Reset</button>
                <button onClick={signinItem} className="w-20 btn btn-primary">Signin</button>
                {loading && <>Loading...</>}
                {error != null && JSON.stringify(error)}
            </article>
        </section>
    );
}