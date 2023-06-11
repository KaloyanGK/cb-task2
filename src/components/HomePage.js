import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
const Home = () => {
    return <>
        <div className='content-container'>
            <div className='content-wrapper'>
                <h1>Build a self care routine <br />suitable for you</h1>
                <p>Take out test to get a personalised <br />self care routine based on your needs</p>
                <Link to={'/quiz'}>Start the quiz</Link>
            </div>
        </div>
    </>
};

export default Home;