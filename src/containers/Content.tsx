import { styled } from '@stitches/react';
import { Observation } from '../components/observation/Observation';

export const Content = styled('a', {
    fontFamily: 'sans-serif',
    backgroundColor: 'Green',//'#ebedee',
    marginLeft: 250,
    width: '80%',
    padding: '1px 16px',
    height: 1000,
    '@media(max-width:400px)': {
        margin: 300,
        backgroundColor: 'Red',
        // width: '100%'
    }
});

export const ContentContainer = () => {
    return (
        <>
            <Content id="main">
                <Observation mimi='oi'></Observation>
                {/* <button id="openNav" onClick={w3_open() as any}>&#9776;</button>
                <>
                    <>Marcelo Ribeiro Gadelha oh iuy uguo yui tfut fut cyt c yrff yct yitciy</>
                </> */}
            </Content>
        </>
    );
}