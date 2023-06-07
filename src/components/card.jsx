import React from 'react';
import SocialIcon from '../components/socialIcon';

const Card = ({item,home}) => {
    return (
        <div key={item.id} className={`bg-light-gray ${home ? '':''} hover:bg-light-yellow`}>
            <div className='flex justify-center mt-10'>
                <img src={item.img} alt="" />
            </div>

            <div className='text-center my-5'>
                <h1 className='font-sen text-dark-blue text-[28px] w-[270px]'>{item.name}</h1>
                <p className='text-inter text-medium-gray'>{item.profession}</p>
            </div>
            <div className='flex justify-center pb-10'>
                <SocialIcon links={item.link} />
            </div>

        </div>
    );
};

export default Card;