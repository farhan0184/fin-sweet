import React, { useState } from 'react';
import posts from '../data/blogs_post';
import Author from '../components/author&date';
import Button from '../components/button';
import { blog } from '../data/images';
import BlogPost from '../components/blog_post';
import Catagory from '../components/catagory';
import JoinNow from '../components/join_now';

const Blog = () => {
    const data = posts.find(item => item.id === 2);
    const [page, setPage] = useState(1);

    const selectPageHandler = (selectedPage) => {
        if (
            selectedPage >= 1 &&
            selectedPage <= posts.length / 5 &&
            selectedPage !== page
        ) {
            setPage(selectedPage);
        }
    }

    return (
        <div className=''>
            {/* first section */}
            <div className='bg-lavender-light'>
                <div className='md:h-[91vh]  w-[90%] mx-auto md:flex items-center '>
                    <div className='md:w-[60%] md:pr-5'>
                        <p className='text-dark-blue font-inter uppercase mb-5 font-bold'>Featured Post</p>
                        <h1 className='font-sen text-dark-blue text-4xl mb-4'>{data.title}</h1>
                        <Author name={data.name} home={false} date={data.date} />
                        <p className='font-inter text-medium-gray my-8'>{data.description}</p>
                        <Button button={`Read More >`} />
                    </div>
                    <div className='py-10'>
                        <img src={blog} alt="" />
                    </div>
                </div>
            </div>

            <div className='w-[90%] mx-auto my-20'>
                {/* post section */}
                <div>
                    <h1 className='font-sen text-dark-blue text-5xl mb-5'>All posts</h1>
                    <hr />
                    <div className='mt-8'>
                        {
                            posts.slice(page * 5 - 5, page * 5).map(item =>
                                <BlogPost key={item.id} item={item} />
                            )

                        }
                        {
                            posts.length > 0 ? <div className='text-center font-bold mt-16 font-sen'>
                                <span onClick={() => selectPageHandler(page - 1)} className={` px-2 ${page <= 1 ? 'cursor-not-allowed text-sm text-medium-gray' : 'cursor-pointer text-base text-dark-blue'}`}>{`< Prev`}</span>
                                <span onClick={() => selectPageHandler(page + 1)} className={` px-2 ${page >= 3 ? 'cursor-not-allowed text-sm text-medium-gray' : 'cursor-pointer text-base text-dark-blue'}`}>{`Next >`}</span>
                            </div> : ""
                        }
                    </div>
                </div>

                {/* catagories */}
                <div className='mt-20'>
                    <h1 className='text-4xl font-sen text-dark-blue'>All Categories</h1>
                    <div className='my-10'>
                        <Catagory />
                    </div>
                </div>

                {/* join with us */}
                <div>
                    <JoinNow />
                </div>
            </div>

        </div>
    );
};

export default Blog;