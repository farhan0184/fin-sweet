import React from 'react';
import {business, startup,economy,technology} from '../data/images';

const catagories = [
    {
        id: 1,
        title: 'Business',
        img: business,
    },
    {
        id: 2,
        title: 'Startup',
        img: startup,
    },
    {
        id: 3,
        title: 'Economy',
        img: economy,
    },
    {
        id: 4,
        title: 'Technology',
        img: technology,
    },
]

const Catagory = () => {
    return (
        <div className='grid md:grid-cols-4 grid-cols-1  gap-3'>
            {
                catagories.map(item =>
                    <div key={item.id} className='p-10 border-[1px] hover:bg-yellow-light'>
                        <div>
                        <img className={`bg-light-yellow rounded-md mb-5 ${item.id === 1 ? '':'p-3'}`} src={item.img} alt={item.title} />
                        </div>
                        <div>
                            <h1 className='text-[28px] font-sen text-dark-blue  mb-5'>{item.title}</h1>
                            <p className='font-inter text-medium-gray'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                        </div>
                    </div>
                )
            }
            
        </div>
    );
};

export default Catagory;