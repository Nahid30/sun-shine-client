import React from 'react';
import banner1 from '../../images/banner1.gif';
import banner2 from '../../images/banner2.gif';
import logo from '../../images/logo.png';

const Banner = () => {
    return (
        <div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner1} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-4xl font-bold">Welcome to <span className='text-orange-600'>Sun Shine</span></h1>
                        <p class="py-6">We provide the best courses for you! If you want to develop yourself by learning new skills, we are here for you.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;