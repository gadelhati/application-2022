import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Auth } from "../auth/auth";
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { signupAction, signinAction, logoutAction, refreshTokenAction } from '../../actions/creator/action.creator.auth';
import { retrieveAllAction } from '../../actions/creator/action.creator.om';
import { initialAuth as initial } from '../auth/auth.initial';
import { styled } from '@stitches/react';

const LoginBox = styled('div', {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '400px',
    padding: '40px',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(0,0,0,.5)',
    boxSizing: 'border-box',
    boxShadow: '0 15px 25px rgba(0,0,0,.6)',
    borderRadius: '10px',
    display: 'flex',
    alignContent: 'stretch',
    h2: {
        margin: '0 0 30px',
	    padding: '0',
	    color: '#fff',
	    textAlign: 'center',
    },
    FloatLabel: {
        position: 'relative',
    }
});

const LabelFloat = styled('div', {
    position: 'relative',
    paddingTop: '13px',
    input: {
        der: '0',
        borderBottom: '2px solid lightgrey',
        outline: 'none',
        minWidth: '180px',
        fontSize: '16px',
        transition: 'all .3s ease-out',
        webkitTransiton: 'all .3s ease-out',
        mozTransition: 'all .3s ease-out',
        webkitAppearance: 'none',
        borderRadius: '0',
        '&:focus': {
            borderBottom: '2px solid #3951b2',
        },
        '&::placeholder': {
            color: 'transparent',
        },
        '&:required:invalid + label': {
            color: 'red',
        },
        '&:focus:required:invalid': {
            borderBottom: '2px solid red',
        },
        '&:required:invalid + label:before': {
            content: '*',
        },
        '&:focus + label': {
            fontSize: '13px',
            marginTop: '0',
            color: '#3951b2',
        },
        '&:not(:placeholder-shown) + label': {
            fontSize: '13px',
            marginTop: '0',
            color: '#3951b2',
        }
    },
    label: {
        ointerEvents: 'none',
        position: 'absolute',
        top: '0',
        left: '0',
        marginTop: '13px',
        transition: 'all .3s ease-out',
        webkitTransition: 'all .3s ease-out',
        mozTransition: 'all .3s ease-out',
    }
});

const FloatLabel = styled('div', {
    position: 'relative',
    input: {
        width: '100%',
        padding: '10px 0',
        fontSize: '16px',
        color: '#fff',
        marginBottom: '30px',
        border: 'none',
        borderBottom: '1px solid #fff',
        outline: 'none',
        background: 'transparent',
        '&:focus ~ label': {
            top: '-20px',
            left: '0',
            color: '#03e9f4',
            fontSize: '12px',
        },
        '&:valid ~ label': {
            top: '-20px',
            left: '0',
            color: '#03e9f4',
            fontSize: '12px',
        },
        '&:invalid': {
            color: 'Red',
        },
    },
    label: {
        position: 'absolute',
        top: '0',
        left: '0',
        padding: '10px 0',
        fontSize: '16px',
        color: '#fff',
        pointerEvents: 'none',
        transition: '.5s',
    }
});

const InputGroup = styled('div', {
    display: 'flex',
    alignContent: 'stretch',
    input: {
        flex: '1 0 auto',
    }
});
const InputGroupAddon = styled('span', {
    background: '#eee',
    border: '1px solid #ccc',
    padding: '0.5em 1em',
});

export const FormList = (props: Auth) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Auth>(props)
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
        dispatch(signupAction(state.username, state.email, state.password))
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
        setState(state => ({
            ...state,
            om: {
                id: event.target.value,
                name: ""
            }
        }))
    }
    return (
        <>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
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
            {error != null && "Some data are required: " + JSON.stringify(error)}
            
            <LoginBox>
                {/* <h2>Login</h2> */}
                <form>
                    <FloatLabel>
                        <input type="email" name="" placeholder='email' required ></input>
                        <label>E-mail</label>
                    </FloatLabel>
                    <FloatLabel>
                        <input type="password" name="" placeholder='password' required ></input>
                        <label>Password</label>
                    </FloatLabel>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                    <InputGroup>
                        <InputGroupAddon>$</InputGroupAddon>
                        <input type="name" value="4.99"></input>
                            <button>Go</button>
                    </InputGroup>
                </form>
            </LoginBox>
            <>
            {/* <LabelFloat>
                <input type="text" placeholder=" sfesf"/>
                <label>Telefone</label>
            </LabelFloat>
            <LabelFloat>
                <input type="text" placeholder=" " required/>
                <label>Nome de Usuário</label>
            </LabelFloat > */}
            </>
        </>
    );
}