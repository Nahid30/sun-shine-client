import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [allServices, setAllServices] = useState([]);

    useEffect(() => {
        fetch('https://mysterious-wave-57725.herokuapp.com/service')
            .then(res => res.json())
            .then(data => {
                setAllServices(data)
            })
    }, [])


    return (
        <div>
            <h2 className='text-center text-orange-600 text-4xl font-semibold mt-4'>Courses </h2> 

            <div className='grid  lg:grid-cols-3 sm:grid-cols-1 gap-8 my-20'>

                {
                    allServices.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }

               

            </div>


        </div>
    );
};

export default Services;