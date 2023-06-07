import React from 'react';
import {toGather, hands,person} from '../data/images';


import JoinNow from '../components/join_now';
import AuthorList from '../components/author_list';
const AboutUs = () => {
    
    return (
        <div className=' my-24 w-[90%] mx-auto '>
            {/* About us */}
            <div className='md:flex '>
                <div className='flex-1 md:px-10  py-14 bg-white mt-0 md:mt-10 md:ml-24 ml-0  md:z-30'>
                    <p className='font-inter text-dark-blue font-bold mb-5'>ABOUT US</p>
                    <h1 className='font-sen text-5xl text-dark-blue'>We are a team of content writers who share their learnings</h1>
                </div>
                <div className='flex-1 md:flex justify-center items-center md:pl-10 md:pr-14 font-inter text-dark-gray md:mt-20 my-20  mt-0'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            {/* Our mision & our vision */}
            <div className='mt-[-50px]'>
                <div className='relative md:-z-50'>
                    <img className='' src={toGather} alt="" />
                    <div className='absolute bottom-3 md:ml-20 '>
                        <div className='md:w-98 hidden   bg-yellow-light p-10  md:flex gap-16 '>
                            <div>
                                <h1 className='font-sen text-dark-blue text-2xl md:text-[56px] font-bold'>12+</h1>
                                <p className='mt-3 font-inter text-dark-blue'>Blogs Published</p>
                            </div>
                            <div>
                                <h1 className='font-sen text-dark-blue text-2xl md:text-[56px] font-bold'>18K+</h1>
                                <p className='mt-3 font-inter text-dark-blue'>Views on Finsweet</p>
                            </div>
                            <div>
                                <h1 className='font-sen text-dark-blue text-2xl md:text-[56px] font-bold'>30K+</h1>
                                <p className='mt-3 font-inter text-dark-blue'>Total active Users</p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute hidden bottom-0 md:flex md:w-[910px] ml-20'>
                        <div className='w-[31%] bg-purple-light p-2 ' />
                        <div className='bg-yellow-light w-[57%] p-2 ' />
                    </div>
                </div>
                <div className='bg-lavender-light px-24 pt-10 md:pb-5 pb-16  md:flex gap-5 '>
                    <div>
                        <p className='font-inter text-dark-blue font-bold mb-5'>OUR MISSION</p>
                        <h1 className='font-sen text-[28px] text-dark-blue'>Creating valuable content for creatives all around the world</h1>
                        <p className='mt-3 font-medium-gray font-inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>

                    </div>
                    <div>
                        <p className='font-inter text-dark-blue font-bold mb-5'>Our Vision</p>
                        <h1 className='font-sen text-[28px] text-dark-blue'>A platform that empowers individuals to improve</h1>
                        <p className='mt-3 font-medium-gray font-inter'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</p>

                    </div>

                </div>
            </div>

            {/* Our team of creatives */}
            <div className='my-20 '>
                <div className='flex md:flex-row flex-col'>
                    {/* text */}
                    <div className='flex-1 w-full flex items-center justify-center md:justify-normal md:order-1 order-2 md:mt-0 mt-10'>
                        <div className='w-[80%]'>
                            <h1 className='font-sen text-dark-blue text-4xl mb-5'>Our team of creatives</h1>
                            <h4 className='font-sen text-dark-blue text-2xl mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                            <p className='font-inter text-dark-blue'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                    </div>
                    {/* image */}
                    <div className='relative flex-1 md:order-2 md:ml-6'>
                        <img className=' ' src={hands} alt="" />
                        <div className='absolute md:-left-12 -left-6 md:top-24 top-20 bg-yellow-light md:w-[103px] w-[60px] h-[73px] md:h-[116px] md:rounded-tl-[50px] rounded-tl-[30px]' />
                    </div>

                </div>
            </div>

            {/* Why we started this Blog */}
            <div className='my-28 '>
                <div className='flex md:flex-row flex-col'>
                    {/* image */}
                    <div className='relative flex-1 md:mr-20'>
                        <img className=' ' src={person} alt="" />
                        <div className='absolute  bg-purple-light w-[74px] h-[74px] rounded-[50px] -bottom-10 left-24' />
                    </div>
                    {/* text */}
                    <div className='flex-1 w-full flex items-center mt-10 justify-center'>
                        <div className='w-[80%]'>
                            <h1 className='font-sen text-dark-blue text-4xl mb-5'>Why we started this Blog</h1>
                            <h4 className='font-sen text-dark-blue text-2xl mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</h4>
                            <p className='font-inter text-dark-blue'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* list of author */}
            <div className=''>
                <div>
                    <h1 className='text-3xl font-sans text-dark-blue text-center'>List of Authors</h1>
                </div>
                <AuthorList home={false}/>


                {/* Join our team */}
                <div>
                    <JoinNow />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;