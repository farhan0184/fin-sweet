import React from 'react';

import listOfAuthors from '../data/listOfAuthor';
import Card from './card';


const AuthorList = ({ home }) => {
    return (
        <div id='content' className={`${home ? 'flex  gap-8 overflow-x-auto  scroll-smooth scrollbar-hide ' : 'grid md:grid-cols-4 grid-cols-1 gap-8 mt-20'}`}>
            {
                listOfAuthors.map(item =>
                    <Card key={item.id} item={item} home={home}/>
                )
            }
        </div>
    );
};

export default AuthorList;