import { useState, ChangeEvent } from 'react';
import { styled } from '@stitches/react';
import { InputGroupInterface } from './InputGroup.interface';

const InputGroupFather = styled('div', {
    display: 'flex',
    alignContent: 'stretch',
});

const InputGroupChild = styled('input', {
    paddingLeft: '10px',
    flex: '1 0 auto',
});

const InputGroupAddon = styled('span', {
    background: '#eee',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '0.5em 1em',
});

export const InputGroup = () => {
    const [ state, setState ] = useState<InputGroupInterface>({ value: '' })
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setState({ [name]: value })
    }
    return (
        <InputGroupFather>
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupChild name='input' type="number" /*value="4.99"*/ onChange={handleInputChange} size={5} maxLength={3} />
            <input type='number'></input>
            <input type="number"></input>
                {/* <button>Go</button> */}
        </InputGroupFather>
    );
};