import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from 'react-router-dom';

const SocialIcon = ({ gap , link}) => {
    return (
        <ul className={`flex ${gap ? ' gap-8' : 'gap-4'}`}>
            <Link to={link?.[0]} className={`${gap ? 'hover:text-white': 'hover:text-yellow-300'}`}><BsFacebook /></Link>
            <Link to={link?.[1]}  className={`${gap ? 'hover:text-white': 'hover:text-yellow-300'}`}><BsTwitter /></Link>
            <Link to={link?.[2]}  className={`${gap ? 'hover:text-white': 'hover:text-yellow-300'}`}><BsInstagram /></Link>
            <Link to={link?.[3]}  className={`${gap ? 'hover:text-white': 'hover:text-yellow-300'}`}><BsLinkedin /></Link>
        </ul>
    );
};

export default SocialIcon;