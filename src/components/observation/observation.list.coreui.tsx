import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Observation } from "./observation";
import { useTypedSelector } from "../../assets/hook/useTypeSelector";
import { retrieveAllAction } from '../../actions/creator/action.creator.observation';

import { Card, Button } from "react-bootstrap";
import { CDataTable } from "@coreui/react";

export const ObservationListCoreUI = (props: Observation) => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState<Observation>(props)
    const { loading, error, itens, item } = useTypedSelector((state) => state.observations);

    useEffect(() => {
        retrieveItem()
    }, [dispatch, state])
    const retrieveItem = () => {
        dispatch(retrieveAllAction())
    }
    const fields = [
        // { key: 'AA/BB' },
        // { key: 'DDDDDDD' },
        // { key: 'II' },
        // { key: 'iii' },
        { key: 'yy' },
        { key: 'gg' },
        { key: 'iw' },
        { key: 'ir' },
        { key: 'ix' },
        { key: 'h' },
        { key: 'vv' },
        { key: 'n' },
        { key: 'dd' },
        { key: 'ff' },
        { key: 'fff' },
        // { key: 'sn' },
        { key: 'ttt' },
        { key: 'pppp' },
        { key: 'ww' },
        { key: 'w1w2' },
        'botao'
      ]
    return (
      <Card>
        {/* <Card.Title>Observations</Card.Title> */}
        <CDataTable
          items={itens}
          fields={fields}
          columnFilter
          // tableFilter
          // footer
          itemsPerPageSelect
          itemsPerPage={5}
          hover
          sorter
          pagination
          scopedSlots={{
            // 'botao':
            //   (item: OM) => (
            //     <td>
            //       <Button href={`/observation/#/item/${item.id}`} variant="secondary" key={item.id} item={item} >More</Button>
            //     </td>
            //   ),
          }}
        />
      </Card>
    );
}