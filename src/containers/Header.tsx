import { styled } from '@stitches/react';

export const Header = styled('div', {
    margin: 0,
    marginLeft: 256,
    padding: 0,
    width: 'auto',
    backgroundColor: 'White',
    position: 'relative',
    height: 56,
    overflow: 'auto',
    '@media(max-width:700px)': {
        width: '100%',
        height: 'auto',
        position: 'relative'
    }
});

export const HeaderItem = styled('div', {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    height: 20,
    alignItems: 'center',
    fontFamily: 'sans-serif',
    fontSize: 16,
    display: 'flex',
    color: '#8A93A2',
    padding: 18,
    backgroundColor: 'White',
    '@media(max-width:400px)': {
        display: 'none',
    }
});

export const HeaderContainer = () => {
    return (
        <>
            <Header id="myHeader" >
                {/* <HeaderItem>
                    Accordion
                </HeaderItem>
                <HeaderItem>
                    News
                </HeaderItem>
                <HeaderItem>
                    Contact
                </HeaderItem>
                <HeaderItem>
                    About
                </HeaderItem> */}
            </Header>
        </>
    );
}