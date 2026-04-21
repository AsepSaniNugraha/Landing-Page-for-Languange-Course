import React from 'react';
import ButtonFill from '../ui/ButtonFill';
import ButtonVar from '../ui/ButtonVar';

const Programs = () => {
    return (
        <section id='programs'>
            <div className='max-w-full px-4 pt-10 bg-(--white) lg:p-6'>
                <div className='flex flex-col gap-6 py-6'>
                    <div className='leading-8 text-center '>
                        <p className='section-subtitle text-(--gold)'>
                            PROGRAMS
                        </p>
                        <p className='section-title text-(--purple-deep)'>
                            Study Tracks for Real-World Communication
                        </p>
                        <p className='section-text text-(--muted) ps-1 pb-4'>
                            Industry-relevant language skills, taught in Bahasa Indonesia, designed to build confident speakers.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        <div className='flex flex-col gap-8 p-8 bg-(--purple) justify-between'>
                            <div className='flex flex-col gap-2'>
                                <p className='card-number text-(--muted) font-semibold'>
                                    01
                                </p>
                                <p className='card-title text-(--white) font-semibold'>
                                    English for Career & Global Communication
                                </p>
                                <p className='section-subtitle text-(--gold)'>
                                    Launching May 2026 · Tembalang Campus
                                </p>
                                <p className='card-text text-(--muted)'>
                                    Master professional English — from daily communication to business presentations and international collaboration.
                                </p>
                            </div>
                            <div className='flex gap-2 items-center flex-wrap'>
                                <p className='card-text text-(--muted) py-1 px-2 border border-(--muted) uppercase'>Speaking</p>
                                <p className='card-text text-(--muted) py-1 px-2 border border-(--muted) uppercase'>Writing</p>
                                <p className='card-text text-(--muted) py-1 px-2 border border-(--muted) uppercase whitespace-nowrap'>Business English</p>
                                <p className='card-text text-(--muted) py-1 px-2 border border-(--muted) uppercase whitespace-nowrap'>IELTS Basics</p>
                            </div>
                            <div className='w-full md:ml-0 mx-auto min-w-max md:max-w-1/2'>
                                <ButtonFill label="REGISTER NOW" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 p-8 bg-(--gray) justify-between'>
                            <div className='flex flex-col gap-2'>
                                <p className='card-number text-(--slate) font-semibold'>
                                    02
                                </p>
                                <p className='card-title text-(--purple-deep) font-semibold'>
                                    Arabic for Education & Culture
                                </p>
                                <p className='section-subtitle text-(--gold)'>
                                    Launching Jun 2026 · Tembalang Campus
                                </p>
                                <p className='card-text text-(--purple)'>
                                    Build strong Arabic foundations for academic, religious, and cultural understanding.
                                </p>
                            </div>
                            <div className='flex gap-2 items-center flex-wrap'>
                                <p className='card-text text-(--purple) py-1 px-2 border border-(--purple) uppercase'>Grammar</p>
                                <p className='card-text text-(--purple) py-1 px-2 border border-(--purple) uppercase'>Reading</p>
                                <p className='card-text text-(--purple) py-1 px-2 border border-(--purple) uppercase whitespace-nowrap'>Conversation</p>
                                <p className='card-text text-(--purple) py-1 px-2 border border-(--purple) uppercase whitespace-nowrap'>Quranic Arabic</p>
                            </div>
                            <div className='w-full md:ml-0 mx-auto min-w-max md:max-w-1/2'>
                                <ButtonVar label="REGISTER NOW" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8 p-8 bg-(--purple) justify-between'>
                            <div className='flex flex-col gap-2'>
                                <p className='card-number text-(--muted) font-semibold'>
                                    03
                                </p>
                                <p className='card-title text-(--white) font-semibold'>
                                    Mandarin for Business & Opportunity
                                </p>
                                <p className='section-subtitle text-(--gold)'>
                                    Launching Aug 2026 · Tembalang Campus
                                </p>
                                <p className='card-text text-(--muted)'>
                                    Learn Mandarin for trade, career growth, and global networking opportunities.
                                </p>
                            </div>
                            <div className='flex gap-2 items-center flex-wrap'>
                                <p className='card-text text-(--muted) py-1 px-2 border border-(--muted) uppercase'>Speaking</p>
                                <p className='card-text text-(--muted) py-1 px-2 border border-(--muted) uppercase'>Hanzi</p>
                                <p className='card-text text-(--muted) py-1 px-2 border border-(--muted) uppercase whitespace-nowrap'>HSK Prep</p>
                                <p className='card-text text-(--muted) py-1 px-2 border border-(--muted) uppercase whitespace-nowrap'>Business Mandarin</p>
                            </div>
                            <div className='w-full md:ml-0 mx-auto min-w-max md:max-w-1/2'>
                                <ButtonFill label="REGISTER NOW" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Programs