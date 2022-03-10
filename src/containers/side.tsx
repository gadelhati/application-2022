import './side.css';

export const Side = () => {
    return (
        <>
            <input type='checkbox' id='check' /> 
            <label htmlFor='check'>
                <img className='fas fa-bars' id='btn'></img>
                <img className='fas fa-times' id='btn1'></img>
            </label>
            <div>
                <header>My Menu</header>
                <a href='#' className='active'>
                    <img className='fas fa-qrcode'></img>
                    <span>Panel</span>
                </a>
                <a href='#'>
                    <img className='fas fa-link'></img>
                    <span>Links</span>
                </a>
                <a href='#'>
                    <img className='fas fa-stream'></img>
                    <span>Overview</span>
                </a>
                <a href='#'>
                    <img className='fas fa-calendar'></img>
                    <span>Calendar</span>
                </a>
                <a href='#'>
                    <img className='fas fa-question-circle'></img>
                    <span>Question</span>
                </a>
                <a href='#'>
                    <img className='fas fa-slider-h'></img>
                    <span>Services</span>
                </a>
                <a href='#'>
                    <img className='fas fa-envelope'></img>
                    <span>Contact</span>
                </a>
            </div>
        </>
    );
}