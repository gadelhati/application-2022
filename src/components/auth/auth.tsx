import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Auth } from "../../assets/interface/auth";
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { signupAction, signinAction, logoutAction, refreshTokenAction } from '../../actions/auth.action.creator';
import { retrieveAllAction } from '../../actions/om.action.creator';
import { initialAuth as initial } from '../../assets/initialState/auth.initial';

export const AuthList = (props: Auth) => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState<Auth>(props)
    const { loading, error, itens, item } = useTypedSelector((state) => state.auths);
    const { loading: omloading, error: omerror, itens: omitens, item: omitem } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        retrieveItem()
    }, [dispatch, state])
    const retrieveItem = () => {
        dispatch(retrieveAllAction())
    }
    const resetItem = () => {
        setState(initial)
    }
    const signupItem = () => {
        dispatch(signupAction(state.om, state.username, state.email, state.password))
    }
    const signinItem = () => {
        dispatch(signinAction(state.username, state.password))
    }
    const logoutItem = () => {
        dispatch(logoutAction())
    }
    // const refreshTokenItem = () => {
    //     dispatch(refreshTokenAction())
    // }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setState( state => ({
            ...state,
                om: {
                    id: event.target.value,
                    name: ""
                }
        }))
    }
    return (
        <>
            <select id="om" name="om" onChange={handleSelectChange}>
                {omitens?.map(omitem => {
                    return (
                        <option 
                        key={omitem.id}
                        value={omitem.id}
                        >{omitem.name}</option>
                    )
                })}
            </select>
            <input
                placeholder="Username"
                aria-label="username"
                aria-describedby="basic-addon1"
                type="text"
                className="form-control"
                id="username"
                required
                value={state.username}
                onChange={handleInputChange}
                name="username"
            />
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
            <input
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
                type="password"
                className="form-control"
                id="password"
                required
                value={state.password}
                onChange={handleInputChange}
                name="password"
            />
            <button onClick={resetItem}>Reset</button>
            <button onClick={signupItem}>Signup</button>
            <button onClick={signinItem}>Signin</button>
            <button onClick={logoutItem}>Logout</button>
            {/* <button onClick={refreshTokenItem}>Refresh Token</button> */}
            {loading && <>Loading...</>}
            {error != null && JSON.stringify(error)}
        </>
    );
}