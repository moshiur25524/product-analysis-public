import React from 'react';
import './Review.css'

const Review = ({review}) => {
    const {person, name, details, rating} = review;
    return (
        <div className='review'>
            <h3>Customer: {person}</h3>
            <p>car: {name}</p>
            <p><small>{details}</small></p>
            <p><small>Rating: {rating} stars</small></p>
        </div>
    );
};

export default Review;