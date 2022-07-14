import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions.generics/creator/action.creator.om';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import '../list.css'
// import data from 'data.json';
import cc from './customer.json'
import exemplo from './chm_2018-06-01_2018-06-30.json'
import exemploONE from './exemploONE.json'

export const ObservationUpload = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Observation[]>([initialObservation])
    const [file, setFile] = useState<File>()
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {

    }, [])
    const selectItem = () => {
        exemplo.forEach((item) => {
            setState([...state, initialObservation])
        })
        console.log(state)
    }
    const handleInputFile = (event: ChangeEvent<HTMLInputElement>) => {
        // let json = JSON.stringify(exemplo);
        // const blob = new Blob([json], {type:"application/json"});
        // const fileReader0 = new FileReader()
        // fileReader0.addEventListener("load", e => {
        //     console.log(e.target?.result, JSON.parse(e.target?.result))
        // });
        // fileReader0.readAsText(blob);


        const fileReader = new FileReader()
        fileReader.readAsText(event.target.files?.[0] as File)
        fileReader.onload = (event) => {
            const fileAsText = event.target?.result
            var jsonString : string = fileAsText
            var observation : Observation = JSON.parse(event.target?.result)
            var observation2 : Partial<[Observation]> = JSON.parse(event.target?.result)





            console.log(fileAsText)
            // console.log(exemplo) //ARQUIVO IMPOTADO ENTENDE COMO JSON ARRAY
            console.log(JSON.stringify(fileAsText?.toString))
            console.log(fileAsText?.toString)
            // console.log(JSON.parse(JSON.stringify(fileAsText).toString))
            console.log(JSON.parse(JSON.stringify(fileAsText)))
            // console.log(JSON.parse(fileAsText?.toString))
            // let obj: Observation = JSON.parse(fileAsText)
        };
        // fileReader.onerror = () => { console.error("error")}
    }
    return (
        <section>
            <article>
                {/* {exemplo?.map(item => {
                    return (
                        <p key={item.dataObservacao}>
                            <td>{item.yy}</td>
                            <td>{item.gg}</td>
                        </p>
                    )
                })} */}
                {state[0].id}
                <input type="file" onChange={handleInputFile} />
                <button onClick={selectItem} className="w-20 btn btn-secondary">Show in Console Log</button>
            </article>
        </section>
    );
}