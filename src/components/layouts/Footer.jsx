import React from 'react';
import logoAcademy from '../../assets/logoAcademy.png';
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-full px-4 pt-10 bg-(--purple) lg:p-6'>
            <div className='card-text text-(--muted) flex flex-col gap-6 py-6 border-y border-y-(--slate) md:flex-row'>
                <div className='flex flex-col gap-6 md:w-1/2'>
                    <div>
                        <div className='flex gap-3 items-center text-(--white)'>
                            <img src={logoAcademy} alt="" className="w-[clamp(50px,10vw,50px)]" />
                            <p>Speak All</p>
                        </div>
                        <p className='text-(--muted)'>
                            A modern language institute dedicated to building Indonesia's next generation of global communicators.
                        </p>
                    </div>
                    <div className='flex gap-4 section-title'>
                        <a href="" className='hover:text-(--white)'><RiInstagramFill /></a>
                        <a href="" className='hover:text-(--white)'><FaLinkedin /></a>
                        <a href="" className='hover:text-(--white)'><FaFacebookSquare /></a>
                        <a href="" className='hover:text-(--white)'><FaTwitter /></a>
                    </div>
                </div>
                <div className='flex items-start justify-between md:w-1/2 md:justify-center md:gap-40'>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold'>PROGRAMS</p>
                        <div className='flex flex-col gap-2'>
                            <a href="" className='hover:underline'>English Program</a>
                            <a href="" className='hover:underline'>Arabic Program</a>
                            <a href="" className='hover:underline'>Mandarin Program</a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold'>SCHOOL</p>
                        <div className='flex flex-col gap-2'>
                            <a href="" className='hover:underline'>About</a>
                            <a href="" className='hover:underline'>Approach</a>
                            <a href="" className='hover:underline'>Campus</a>
                            <a href="" className='hover:underline'>Careers</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-(--muted) text-center py-3'>Copyright Speak All 2026</p>
            </div>
        </div>
    )
}

export default Footer