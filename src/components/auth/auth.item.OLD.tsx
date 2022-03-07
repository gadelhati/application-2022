import React, { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
import { useAppDispatch } from "../../assets/hook/useHook"
// import { useHistory } from "react-router-dom"

import { signupActions, signinActions } from "../../actions/action.auth"
import { Card, OverlayTrigger, Tooltip, InputGroup, FormControl, Button } from "react-bootstrap"
import { Message } from "../../assets/helpers/message.alert"
import ErrorBoundary from "../../assets/helpers/error.boudary"
import heraldica from "../../assets/image/heraldica.png"

export const AuthItem = (props: any) => {

    const [state, setState] = useState(props)
    const [message, setMessage] = useState({ expose: false, heading: "", body: "" })
    // const history = useHistory()
    // const useAppDispatch = useDispatch()
    const dispatch = useAppDispatch()

    // const loading = useSelector((state => state.itens.loading))
    // const error = useSelector((state => state.itens.error))
    // const itens = useSelector((state => state.itens.itens))

    // useEffect(() => {
    //     dispatch(retrieveActions(props.match.params.id))
    //     .then(response => {
    //         setState(response)
    //     })
    //     .catch(error => {
    //     })
    // }, [dispatch, props.match.params.id])
    useEffect(() => {
        // if(serviceToken.getUser("user")){
            // return <Redirect to="/profile" />
        // }
        // history.push('/signin')
    }, [state]);

    const signupItem = () => {
        // dispatch(signupActions(state.username, state.email, state.password))
            // .then(response => {
            //     setMessage({ expose: true, heading: "Signuped", body: JSON.stringify(response.id) })
            // })
            // .catch(error => {
            //     setMessage({ expose: true, heading: "Error", body: error.response.data.errors.map(item => item.field + ": " + item.defaultMessage + ", ") })
            // })
    };
    const signinItem = () => {
        // dispatch(signinActions(state.username, state.password))
            // .then(response => {
            //     setMessage({ expose: true, heading: "Signined", body: JSON.stringify(response) })
            //     history.push("/observation")
            //     window.location.reload()
            // })
            // .catch(error => {
            //     setMessage({ expose: true, heading: "Error", body: JSON.stringify("error") })
            // })
    }
    // const logOutItem = () => {
    //     dispatch(logOut())
    //     // history.go(0)
    // }
    // const refreshTokenItem = () => {
    //     submitItem(state)
    //     dispatch(refreshToken(state))
    //     history.push("/")
    // }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ ...state, [name]: value })
    };
    // const error = useSelector((state) => state.error.error)

    return (
        <>
        {/* {   loading ?
			<Message expose={message.expose} header="Loading" body="loading..." />
			:
			<Message expose={message.expose} header={message.heading} body={message.body} />
		} */}
        <Card style={{ width: '28rem' }}>
            <Card.Img className="profile-img-card" alt="Centro de Hidrografia da Marinha" src={heraldica} height={40} />
             <Card.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                    <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Valid username</Tooltip>}>
                        <FormControl
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
                    </OverlayTrigger>
                </InputGroup>
                
                <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                    <OverlayTrigger placement="top" overlay={<Tooltip id="button-tooltip-2">Password</Tooltip>}>
                        <FormControl
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
                    </OverlayTrigger>
                </InputGroup>
                
                {state.error ? <div className="font-weight-bold alert alert-danger text-center mt-4">Some data are //required {state.error}</div> : null}
            </Card.Body>
        </Card>
        </>
    )
}