import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>

            <div>
            <h2 className='text-center text-4xl font-semibold text-orange-600'>Our Course Video</h2>
            
            <div className='flex justify-center my-10 px-6'>
            <iframe width="730" height="415" src="https://www.youtube.com/embed/7ET1hQpYY4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            </div>
            
        </div>
    );
};

export default Home;