import React from 'react';
import Button from './button';

const JoinNow = () => {
    return (
        <div className='md:w-[37%] w-full mx-auto text-center mt-32'>
            <h1 className='font-sen text-4xl  text-dark-blue mb-5'>Join our team to be a part of our story</h1>
            <p className='font-inter text-medium-gray mb-5'>orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            <Button button={`Join Us`}/>
        </div>
    );
};

export default JoinNow;