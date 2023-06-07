import React from 'react';
import Navigation from './navigation';

import SocialIcon from './socialIcon';

const link = [ 'https://www.facebook.com/', 'https://www.twitter.com/', 'https://www.instagram.com/', 'https://www.linkedin.com/']
const Footer = () => {
    return (
        <div className='-z-50'> 
            <div className=''>
                <Navigation  />
            </div>
            <div className='bg-dark-blue py-3 text-white'>
                <div className='w-[90%] mx-auto mt-10 '>
                    <div className='font-sen bg-white/5  grid md:grid-cols-2 grid-cols-1 md:px-14 px-5 md:py-20 py-10'>
                        <div className='md:pr-16 mb-5 md:mb-0'>
                            <h1 className='text-3xl '>Subscribe to our news letter to get latest updates and news</h1>
                        </div>
                        <div>
                            <input className='py-2 px-4 md:w-[58%] md:ml-8 md:mr-5 bg-transparent border-[1px] border-dark-gray text-medium-gray font-inter' type="text" placeholder='Enter Your Email' />
                            <button className='px-4 py-2 bg-yellow-light text-black'>Subscribe</button>
                        </div>
                    </div>
                    <div className='my-10 text-white/70 flex md:justify-between items-center flex-col md:flex-row'>
                        <div className='text-center mb-5 md:mb-0'>
                            <p>Finstreet 118 2561 Fintown</p>
                            <p>Hello@finsweet.com  020 7993 2905</p>
                        </div>
                        <div>
                            <SocialIcon gap={'true'} link={link}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default Footer;