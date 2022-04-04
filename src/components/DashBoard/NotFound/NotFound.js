import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error'>
            <h1>Opps!!!</h1>
            <h2>Sorry! You are on the wrong way</h2>
            <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI3lHFjBbLelg5rGnkZVukHUI2cd9cnEGOQ&usqp=CAU`} alt="" />
        </div>
    );
};

export default NotFound;