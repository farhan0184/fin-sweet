import React from 'react';

const ContactUs = () => {
    return (
        <div className=''>
            <div className='mt-48 mb-36  w-[55%] mx-auto'>
                <div className='text-center'>
                    <p className='font-inter mb-5  font-bold text-dark-blue'>CONTACT US</p>
                    <h1 className='md:text-5xl text-4xl  mb-5 font-sen font-bold text-dark-blue'>Let’s Start a Conversation</h1>
                    <p className='font-inter  mb-5 text-medium-gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                </div>
                <div className='my-10 bg-purple-light md:flex px-12 py-8 gap-10'>
                    <div className='flex-1 md:mb-0 mb-10'>
                        <p className='font-inter mb-3 text-white/60'>Working hours</p>
                        <hr className='border-0 h-[1px] bg-white/10' />
                        <div className='mt-3 font-sen text-2xl font-bold text-white'>
                            <h3>Monday To Friday</h3>
                            <h3>9:00 AM to 8:00 PM </h3>
                        </div>
                        <p className='font-inter my-2 text-white/60 '>Our Support Team is available 24/7</p>
                    </div>
                    <div className='flex-1'>
                        <p className='font-inter mb-3 text-white/60'>Contact Us</p>
                        <hr className='border-0 h-[1px] bg-white/10' />
                        <h3 className='mt-3 font-sen text-2xl font-bold text-white'>020 7993 2905</h3>
                        <p className='font-inter my-2 text-white/60 '>hello@finsweet.com</p>
                    </div>

                </div>

                {/* input field */}
                <form action="">
                    <input type="text" placeholder='Full Name' className='placeholder-black w-full px-5 py-5 border-[1px]' />
                    <input type="text" placeholder='Your Email' className='placeholder-black mt-4 w-full px-5 py-5 border-[1px]' />
                    <select id="countries" className="mt-4 w-full px-5 py-5 border-[1px]">
                        <option value=''>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <textarea name="" placeholder='Massage' id="" cols="30" rows="5" className="placeholder-black mt-4 w-full px-5 py-5 border-[1px]"></textarea>

                    <button className="mt-4 w-full px-5 py-3 bg-yellow-light font-sen text-dark-blue font-bold">Send Massage</button>

                </form>

            </div>
        </div>
    );
};

export default ContactUs;