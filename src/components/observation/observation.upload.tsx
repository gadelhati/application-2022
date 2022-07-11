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

export const ObservationUpload = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Observation>(initialObservation)
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        // const customer = require("./customer.json");
        // console.log(customer.address);
        // const fs = require('fs')
        // try {
        //     const jsonString = fs.readFileSync('./customer.json', 'utf-8')
        //     const customer = JSON.stringify(jsonString)
        //     console.log(customer.address)
        // } catch(err) {
        //     console.log('Erro: ' + err)
        // }
        // })
        // fs.writeFile
    }, [])
    const selectItem = () => {
        // setState(exemplo)
        for(let i = 0;i<exemplo.length;i++){
            console.log(exemplo[i]);
        }
    }
    return (
        <section>
            <article>
                {JSON.stringify(cc)}
                {cc.name}
                {cc.address}
                {cc.order_count}
                <button onClick={selectItem} className="w-20 btn btn-secondary">Show in Console Log</button>
            </article>
        </section>
    );
}