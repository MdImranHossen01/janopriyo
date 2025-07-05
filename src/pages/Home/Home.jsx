import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import Newsletter from './Newsletter';
import Discount from './Discount';
import Display from './Display';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Display></Display>
            <Discount></Discount>
            <Newsletter></Newsletter>
            <Stats></Stats>
        </div>
    );
};

export default Home;