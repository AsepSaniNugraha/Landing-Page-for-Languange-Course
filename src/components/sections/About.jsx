import React from 'react';
import { HiCircleStack } from "react-icons/hi2";
import { HiSquare3Stack3D } from "react-icons/hi2";

const About = () => {
    return (
        <section id='about'>
            <div className='max-w-full px-4 pt-10 bg-(--gray) lg:p-6'>
                <div className='flex flex-col gap-6 py-6 lg:flex-row lg:gap-10 lg:justify-between'>
                    <div className='leading-8 lg:flex lg:flex-col lg:w-1/2'>
                        <p className='section-subtitle text-(--gold)'>
                            ABOUT SPEAK ALL
                        </p>
                        <p className='section-title text-(--purple-deep)'>
                            A Language School Built for Indonesia, Not Imported from Abroad
                        </p>
                        <p className='section-text text-(--muted) py-4 '>
                            Founded by experienced educators and language practitioners, Speak All exists to bridge the gap between global communication skills and local talent development.
                        </p>
                        <p className='section-text text-(--muted) py-4'>
                            Our curriculum uses Bahasa Indonesia as a foundation. Our learning materials reflect real-life communication needs in Indonesia. Our mission is to ensure that language proficiency is not a privilege for a few, but a skill accessible to everyone.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1'>
                        <div className='bg-(--white) p-8 flex flex-col gap-4'>
                            <div className='p-1 max-w-max text-4xl text-(--purple) border border-(--muted)'>
                                <HiCircleStack />
                            </div>
                            <div>
                                <p className='card-title font-semibold text-(--purple)'>
                                    Practical Curriculum
                                </p>
                                <p className='card-text text-(--muted)'>
                                    Real conversations, real scenarios, real-world communication skills.
                                </p>
                            </div>
                        </div>
                        <div className='bg-(--purple) p-8 flex flex-col gap-4'>
                            <div className='p-1 max-w-max text-4xl text-(--white) border border-(--muted)'>
                                <HiSquare3Stack3D />
                            </div>
                            <div>
                                <p className='card-title font-semibold text-(--white)'>
                                    Accessible by Design
                                </p>
                                <p className='card-text text-(--muted)'>
                                    No language or location should limit your opportunity to learn.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    )
}

export default About