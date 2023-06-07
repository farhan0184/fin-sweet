import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import navBars from '../data/data';
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiOutlineX } from "react-icons/hi";


const Navigation = ({ open }) => {
    const [openBars, setOpenBars] = useState(false)

    return (
        <div className={`${open ? 'fixed top-0 w-full z-50' : ''} bg-dark-blue ${open ? 'py-3' : 'pt-10'} text-white `}>
            <div className='w-[90%] mx-auto md:flex  items-center justify-between font-inter'>
                {open ? <div onClick={() => setOpenBars(!openBars)} className='md:hidden flex justify-left mr-10 mt-5 '>
                    {openBars ? <HiOutlineX className="h-8 w-8" /> : <HiBars3CenterLeft className="h-8 w-8" />}
                </div> : ''}
                <div className='md:mt-0 mt-[-30px]  md:flex w-full items-center justify-between'>
                    <h1 className='text-2xl md:text-left text-center'>FinSweet</h1>
                    <div className='flex flex-col  md:flex-row  gap-5 items-center'>
                        <ul className={`md:flex gap-5 md:mt-0 ${open ? `${openBars ? '' : ' mt-[-572px]'}` : 'flex flex-wrap justify-center md:mb-0 mb-10'}   `}>
                            {
                                navBars.map(item =>
                                    <div key={item.id} className='md:text-left text-center  md:mt-0 mt-10'>
                                        <NavLink to={item.href} style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? '#FFD050' : 'white'
                                                
                                            };
                                        }} onClick={() => setOpenBars(false)}>{item.name}</NavLink>
                                    </div>
                                )
                            }
                        </ul>
                        {open ? <button className='text-black px-4 py-2   bg-white md:my-0 my-10'>Subscribe</button> : ''}
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Navigation;