import React from 'react';

const Author = ({home,name,date,allPost}) => {
    return (
        <p className={`${allPost ? 'mb-3': 'mb-5'} font-inter ${home ? 'text-base':'text-xs'}`}>By <span className={`${home ? 'text-yellow-light':'text-purple-light'}`}>{name}</span>  |  {date} </p>
    );
};

export default Author;