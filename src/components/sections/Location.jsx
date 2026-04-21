import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const Location = () => {
    return (
        <section id='location'>
            <div className='max-w-full px-4 pt-10 bg-(--white) lg:p-6'>
                <div className='grid grid-cols-1 items-center gap-6 py-6 md:grid-cols-2'>
                    <div className='md:col-start-2'>
                        <div className='leading-8 text-center '>
                            <p className='section-subtitle text-(--gold)'>
                                TEMBALANG CAMPUS
                            </p>
                            <p className='section-title text-(--purple-deep)'>
                                A Space Designed for Focused Learning
                            </p>
                            <p className='section-text text-(--muted) ps-1 pb-4'>
                                Our Tembalang campus blends a comfortable learning environment with modern facilities to support interactive language education.
                            </p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex items-center gap-6 border border-(--cream) text-(--purple) px-4 py-2'>
                                <div>
                                    <FaLocationDot className='section-title' />
                                </div>
                                <div className='card-title'>
                                    <p className='font-bold'>Location</p>
                                    <p>Tembalang, Semarang</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-6 border border-(--cream) text-(--purple) px-4 py-2'>
                                <div>
                                    <FaRegCalendarAlt className='section-title' />
                                </div>
                                <div className='card-title'>
                                    <p className='font-bold'>First Cohort</p>
                                    <p>May 2026 - English for Career & Global Communication</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-6 border border-(--cream) text-(--purple) px-4 py-2'>
                                <div>
                                    <FaPeopleGroup className='section-title' />
                                </div>
                                <div className='card-title'>
                                    <p className='font-bold'>Class Size</p>
                                    <p>Max 25 students per cohort</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 items-center justify-center w-full h-full px-10 py-15 bg-(--purple) md:col-start-1 md:row-start-1'>
                        <div className='flex items-center justify-center w-28 h-28 rounded-full bg-(--white) p-5'>
                            <FaLocationDot className='hero-title text-(--purple)' />
                        </div>
                        <div className='section-subtitle text-center text-(--white) font-semibold'>
                            <p>TEMBALANG, SEMARANG</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location