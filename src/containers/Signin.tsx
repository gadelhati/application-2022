import { useState, ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Auth } from '../components/auth/auth';
import { useTypedSelector } from "../assets/hook/useTypeSelector";
import { signupAction, signinAction, logoutAction, refreshTokenAction } from '../actions/creator/action.creator.auth'
import { initialAuth } from '../components/auth/auth.initial';
// import { styled } from '@stitches/react';
// import "./../assets/bootstrap/dist/css/bootstrap.min.css"
import "./signin.css"
import logo from '../assets/image/heraldica.png'

// export const Signin = styled('div', {
//     margin: 0,
//     marginLeft: 256,
//     padding: 0,
//     width: 'auto',
//     backgroundColor: 'White',
//     position: 'relative',
//     height: 56,
//     overflow: 'auto',
//     '@media(max-width:700px)': {
//         width: '100%',
//         height: 'auto',
//         position: 'relative'
//     }
// });

export const SigninContainer = (props: Auth) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ state, setState ] = useState<Auth>(props)
    // const { loading, error, itens, item } = useTypedSelector((state) => state.auths);
    const { loading, error, itens, item } = useTypedSelector((state) => state.auths);

    useEffect(() => {
        retrieveItem()
    }, [dispatch, state])
    const retrieveItem = () => {
        // dispatch(retrieveAllAction())
    }
    const resetItem = () => {
        setState(initialAuth)
    }
    const signupItem = () => {
        dispatch(signupAction(state.om, state.username, state.email, state.password))
    }
    const signinItem = () => {
        dispatch(signinAction(state.username, state.password))
        // console.log(JSON.stringify(error))
        // if(error == null) {
        //     navigate("/om")
        // }
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
    return (
        <div className="text-center">
            <div className="form-signin">
                {/* <Signin > */}
                <img className="mb-4" src={logo} alt="" height="128"></img>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                    <input placeholder="Username" type="text" className="form-control" id="username" value={state.username} onChange={handleInputChange} name="username" ></input>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating">
                    <input placeholder="Password" type="password" className="form-control" id="password" value={state.password} onChange={handleInputChange} name="password" ></input>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me" id="rememberMe" disabled></input>
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <button onClick={signinItem} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© Marinha do Brasil 1822 - 2022</p>
                {loading && <>Loading...</>}
                {error != null && "Some data are required: " + JSON.stringify(error)}
                {/* </Signin> */}
            </div>
        </div>
    );
}