import { useState, ChangeEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { createAction, retrieveAllAction, updateAction, deleteAction } from '../../actions.generics/creator/action.creator.om';
import { Observation } from "./observation.interface";
import { initialObservation } from './observation.initial';
import '../list.css'
// import data from 'data.json';
import cc from './customer.json'

export const ObservationUpdload = (props: Observation) => {
    const dispatch = useDispatch();
    const [state, setState] = useState<Observation>(initialObservation)
    const { loading, error, itens, item } = useTypedSelector((state) => state.oms);

    useEffect(() => {
        cc.name
        cc.address
        cc.order_count


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
    return (
        <section>
            <article>
                let greeting = data.greeting;
            </article>
        </section>
    );
}