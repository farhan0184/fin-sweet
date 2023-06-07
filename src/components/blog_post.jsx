import React from 'react';

const BlogPost = ({item}) => {
    const {blogImg,catagory,title,description} = item
    return (
        <div  className='md:flex items-center mb-10 w-full'>
            <div className=''>
                <img className='' src={blogImg} alt="" />
            </div>
            <div className='md:mt-0 mt-10 md:flex-1 md:pl-5 md:pr-20'>
                <p className='uppercase font-bold text-purple-light font-inter mb-3'>{catagory}</p>
                <h1 className='font-sen text-4xl text-dark-blue mb-3'>{title}</h1>
                <p className='font-inter text-medium-gray'>{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;