import { useState } from "react";
import AppRoutes from "./AppRoutes";
import Observation from "./components/Observation";

export default function App() {
  const [observation, setObservation] = useState<string[]>([
    'Observation 1',
    'Observation 2',
    'Observation 3'
  ])
  function create() {
    setObservation([...observation, 'Observation 4'])
  }
  return (
    <>
      <AppRoutes/>
      {observation.map(observation => {
        return <Observation mimi={observation}/>
      })}
      <button style={{backgroundColor: 'GrayText'}} onClick={create}>Button</button>
    </>
  )
}