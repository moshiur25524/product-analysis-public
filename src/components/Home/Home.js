import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home'>
            <div>
               
                <h1>Enjoy Time With Your Loving Car</h1>
                <p>
Digitization, increasing automation, and new business models have revolutionized other industries, and automotive will be no exception. These forces are giving rise to four disruptive technology-driven trends in the automotive sector: diverse mobility, autonomous driving, electrification, and connectivity.</p>
            </div>
            <div className='car-img'>
                <img src={`https://img.freepik.com/free-photo/red-luxury-sedan-road_114579-5079.jpg?w=996&t=st=1649084557~exp=1649085157~hmac=85cae44df1a8b7ac225a13e9513a3209c37861cb8c075bf53f6ecdadfab8bb65`} alt="" />
            </div>
        </div>
        <div className='review-info'>
            <h2>Customer Reviews (3)</h2>
            <Reviews></Reviews>
            <Link to='/reviews'>See all Reviews</Link>
        </div>
        </div>
    );
};

export default Home;