import React from 'react';
import NotFoundPic from '../../images/404.gif';

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={NotFoundPic} alt="" />
            
        </div>
    );
};

export default NotFound;