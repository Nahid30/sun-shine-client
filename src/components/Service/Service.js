import React from 'react';

const Service = ({service}) => {

    const { _id, name, img, description, price, duration } = service;

    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl mx-auto ">
                <img src={img} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-xl text-orange-600">{name}</h2>
                    <p> <span className='text-black'>Price:</span>  <span className='text-orange-600'>${price}</span> </p>
                    <p> <span className='text-black'> Description:</span> <span className='text-orange-600'>{description}</span></p>
                    <p> <span className='text-black'> Duration:</span> <span className='text-orange-600'> {duration}</span></p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-white">Enroll</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Service;