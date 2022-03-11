import { Card } from "react-bootstrap"
import { getUserName, getLocalAccessToken, getId, getEmail, getUser } from "../../services/service.token"

export const Profile = (props: any) => {

    return (
        <Card>
            <Card.Body>
                {getUser() ?
                    <div className="container">
                        <p><strong>Profile: </strong> {getUserName()}</p>
                        <p><strong>Token: </strong> {getLocalAccessToken()}</p>
                        <p><strong>Id: </strong> {getId()}</p>
                        <p><strong>Email: </strong> {getEmail()}</p>
                        <strong>Authorities: </strong> {getUser().roles.map((role: any, index: any) => <li key={index}>{role}</li>)}
                    </div>
                    :
                    <></>
                }
            </Card.Body>
        </Card>
    )
}