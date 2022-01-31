import { useState } from "react";
import { initialObservation } from "../initialState/initialObservation";
import { Observation } from "./Observation";

export const ObservationList = (/*props: InitialObservation[]*/) => {
    const [observation, setObservation] = useState<initialObservation[]>([
        {mimi:'Observation 1'},
        {mimi:'Observation 2'},
        {mimi:'Observation 3'}
    ])
    function create() {
        setObservation([...observation, {mimi:'Observation 4'}])
    }
    return (
        <>
            {observation.map(item => {
                return <Observation mimi={item.mimi} />
            })}
            <button style={{ backgroundColor: 'GrayText' }} onClick={create}>Button</button>
        </>
    )
}