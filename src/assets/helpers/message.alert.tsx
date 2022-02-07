import React, { useState } from "react"
import { Alert, Spinner } from "react-bootstrap"
import { initialMessage } from "../../components/initialState/initialMessage";

export const Message = (props: initialMessage) => {
    const [message, setMessage] = useState<initialMessage>(props);

    return (
        <Alert variant="secondary" onClose={() => setMessage({ expose: false, header: "", body: "" })} >
            <Alert.Heading>{message.header}</Alert.Heading>
            {message.header === "Loading" ?
                <><Spinner animation="grow" size="sm" />{' '}Loading...</>
                :
                props.body
            }
        </Alert>
    )
}