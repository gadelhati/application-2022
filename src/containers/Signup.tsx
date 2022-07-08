import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Auth } from '../components/auth/auth';
import { useTypedSelector } from "../assets/hook/useTypeSelector";
import { signupAction, signinAction, logoutAction, refreshTokenAction } from '../actions.generics/creator/action.creator.auth'
import { initialAuth } from '../components/auth/auth.initial';
import "./../assets/bootstrap/dist/css/bootstrap.min.css"
import "./signin.css"
import logo from '../assets/image/heraldica.png'

export const Signup = (props: Auth) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ state, setState ] = useState<Auth>(initialAuth)
    const { loading, error, itens, item, user, isLoggedIn } = useTypedSelector((state) => state.auths);

    const resetItem = () => {
        setState(initialAuth)
    }
    const signinItem = () => {
        dispatch(signinAction(state.username, state.password))
        if(isLoggedIn) {
            navigate("/list")
        }
    }
    const logoutItem = () => {
        dispatch(logoutAction())
    }
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    }
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col">
                    <div className="mb-3">
                        <input placeholder="Username" type="text" className="form-control" id="username" value={state.username} onChange={handleInputChange} name="username" ></input>
                    </div>
                </div>
            </div>
        </div>
    );
}