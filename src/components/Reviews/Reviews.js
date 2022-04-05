import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`data.json`)
        .then(res=>res.json())
        .then(data=> setReviews(data))
    },[])
    return (
        <div>
            <h1>Total reviews: {reviews.length}</h1>
            <div className='reviews'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }
            </div>
        </div>
    );
};

export default Reviews;