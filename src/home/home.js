import React from 'react';
import { home1, home2, toGather2 } from '../data/images';
import posts from '../data/blogs_post';
import { Link } from 'react-router-dom';
import Button from '../components/button';
import Author from '../components/author&date';
import Catagory from '../components/catagory';
import AuthorList from '../components/author_list';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import JoinNow from '../components/join_now';



const Home = () => {
    const data = posts.find(item => item.id === 1);
    const data2 = posts.find(item => item.id === 2);
    const data3 = posts.filter(item => item.id !== 1 && item.id !== 2 && item.id <= 6);

    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 300;
    }
    const scrollRight = () => {
        document.getElementById("content").scrollLeft += 300;
    }
    return (
        <div className='mt-10'>
            {/* first section */}
            <div>

                <div className=''
                    style={{
                        backgroundImage: `url(${home1})`,
                        height: '115vh'
                    }}
                >
                    <div className='flex items-center w-[90%] mx-auto '
                        style={{
                            backgroundColor: `radial-gradient(30.56% 76.04% at 74.24% -0.21%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)`, height: `115vh`
                        }}>
                        <div className='text-white md:w-[65%] w-full md:mt-0 mt-[-200px]'>
                            <p className='font-bold font-inter uppercase md:mb-5'>Posted on {data.catagory}</p>
                            <h1 className='md:text-[56px] text-5xl leading-tight mb-5'>{data.title}</h1>
                            <Author home={true} name={data.name} date={data.date} />
                            <p className='w-[70%] md:mb-10 mb-5'>{data.description}</p>
                            <Button button={`Read More >`} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[90%] mx-auto md:my-16 '>
                {/* second section */}
                <div className='md:flex md:gap-5 w-full'>
                    <div className='md:w-[60%] w-full'>
                        <div>
                            <h1 className='text-4xl text-dark-blue font-sen'>Feature Post</h1>
                        </div>
                        <div className='p-5 border-[1px] my-10'>
                            <img className='mb-5' src={home2} alt="" />
                            <Author home={false} name={data2.name} date={data2.date} />
                            <div className='w-full'>
                                <h1 className='text-[28px] font-sen text-dark-blue mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h1>
                                <p className='text-inter mb-5 text-medium-gray'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <Button button={`Read More >`} />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[40%] w-full'>
                        <div className='flex justify-between'>
                            <h1 className='text-4xl text-dark-blue font-sen'>All post</h1>
                            <Link className='text-purple-light hover:text-dark-blue'>View All</Link>
                        </div>
                        <div className='my-8'>
                            {
                                data3.map(item =>
                                    <div key={item.id} className='mb-3 py-8 bg-white hover:bg-light-yellow'>
                                        <div className='md:ml-8 ml-0 md:w-[70%] w-full'>
                                            <Author home={false} allPost={true} name={item.name} date={item.date} />
                                            <h3 className='font-sen text-2xl text-dark-blue'>{item.title}</h3>
                                        </div>


                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                {/* third section */}
                <div className='w-full mb-20'>
                    <div className='w-full flex md:justify-end justify-center'>
                        <div className='flex flex-row w-[82%]'>
                            <div className='p-2 w-[70%] bg-yellow-light' />
                            <div className='p-2 w-[30%] bg-purple-light' />
                        </div>

                    </div>
                    <div className='w-full md:flex bg-lavender-light py-16 md:px-10'>
                        <div className='flex-1 px-5 md:mb-0'>
                            <p className='uppercase font-bold text-dark-blue mb-5'>About us</p>
                            <h1 className='text-4xl font-sen text-dark-blue pb-4'>We are a community of content writers who share their learnings</h1>
                            <p className='text-medium-gray pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button>{`Read More >`}</button>
                        </div>
                        <div className='flex-1 md:px-10 px-5'>
                            <p className='uppercase font-bold text-dark-blue mb-5'>Our mision</p>
                            <h1 className='text-xl font-sen text-dark-blue pb-4'>Creating valuable content for creatives all around the world</h1>
                            <p className='text-medium-gray pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        </div>

                    </div>
                </div>

                {/* choose a catagory */}
                <div className='mt-10'>
                    <h1 className='text-center font-sen md:text-4xl text-3xl text-dark-blue mb-16'>Choose A Catagory</h1>

                    <Catagory />
                </div>

                {/* why we started */}
                <div className='my-16 w-full flex flex-col md:relative'>
                    <div className=' md:w-[75%] w-full md:h-[580px] h-[300px]'>
                        <img className='w-full h-full' src={toGather2} alt="toGather" />
                    </div>
                    <div>
                        <div className=' bg-white md:w-[55%] w-fill md:px-14 px-5 py-16 md:absolute md:bottom-0 md:right-1'>
                            <p className='text-dark-blue font-bold uppercase font-inter mb-5'>Why we started </p>
                            <h1 className='text-5xl font-sen text-dark-blue mb-5'>It started out as a simple idea and evolved into our passion</h1>
                            <p className='font-inter text-medium-gray mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                            <Button button={`Discover our story >`} />
                        </div>
                    </div>
                </div>


                {/* list of authors with carousel */}

                <div>
                    <div className='text-center font-sen md:text-4xl text-3xl text-dark-blue mb-16'>
                        <h1>List of Authors</h1>
                    </div>
                    {/* carousel */}
                    <div className='relative'>
                        <div onClick={scrollLeft} className='absolute top-36 -left-4'>
                            <BsArrowLeftCircleFill className="h-8 w-8 text-dark-blue hover:text-yellow-light" />
                        </div>
                        <AuthorList home={true} />
                        <div onClick={scrollRight} className='absolute top-36 -right-4 '>
                            <BsArrowRightCircleFill className="h-8 w-8 text-dark-blue hover:text-yellow-light" />
                        </div>
                    </div>


                </div>
                {/* Join our team */}
                <div>
                    <JoinNow />
                </div>

            </div>



        </div>
    );
};

export default Home;