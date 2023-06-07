import {business, startup,economy,technology,peopleDoingHandshake,talkingPeople,twoWoman,womanLooking} from './images';
const posts =[
    {
        id: 1,
        catagory: 'startup',
        img: startup,
        blogImg: peopleDoingHandshake,
        title:'Step-by-step guide to choosing great font pairs',
        name: 'James West',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 2,
        catagory: 'business',
        img: business,
        blogImg: talkingPeople,
        title:'How to build rapport with your web design clients',
        name: 'John Doe',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 3,
        catagory: 'startup',
        img: startup,
        blogImg: twoWoman,
        title:'Logo design trends to avoid in 2022',
        name: 'James West',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 4,
        catagory: 'technology',
        img: technology,
        blogImg: womanLooking,
        title:'8 Figma design systems you can download for free today',
        name: 'Andrew Jonson',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 5,
        catagory: 'economy',
        img: economy,
        blogImg: peopleDoingHandshake,
        title:'Font sizes in UI design: The complete guide to follow',
        name: 'John Doe',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 6,
        catagory: 'startup',
        img: startup,
        blogImg: talkingPeople,
        title:'Step-by-step guide to choosing great font pairs',
        name: 'James West',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 7,
        catagory: 'business',
        img: business,
        blogImg: twoWoman,
        title:'How to build rapport with your web design clients',
        name: 'John Doe',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 8,
        catagory: 'startup',
        img: startup,
        blogImg: womanLooking,
        title:'Logo design trends to avoid in 2022',
        name: 'James West',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 9,
        catagory: 'technology',
        img: technology,
        blogImg: peopleDoingHandshake,
        title:'8 Figma design systems you can download for free today',
        name: 'Andrew Jonson',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 10,
        catagory: 'economy',
        img: economy,
        blogImg: talkingPeople,
        title:'Font sizes in UI design: The complete guide to follow',
        name: 'John Doe',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 11,
        catagory: 'startup',
        img: startup,
        blogImg: twoWoman,
        title:'Step-by-step guide to choosing great font pairs',
        name: 'James West',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 12,
        catagory: 'business',
        img: business,
        blogImg: womanLooking,
        title:'How to build rapport with your web design clients',
        name: 'John Doe',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 13,
        catagory: 'startup',
        img: startup,
        blogImg: peopleDoingHandshake,
        title:'Logo design trends to avoid in 2022',
        name: 'James West',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 14,
        catagory: 'technology',
        img: technology,
        blogImg: talkingPeople,
        title:'8 Figma design systems you can download for free today',
        name: 'Andrew Jonson',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    {
        id: 15,
        catagory: 'economy',
        img: economy,
        blogImg: twoWoman,
        title:'Font sizes in UI design: The complete guide to follow',
        name: 'John Doe',
        date: 'May 23, 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.' 
    },
    
]
export default posts;