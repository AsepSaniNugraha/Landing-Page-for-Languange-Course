import React from 'react';
import { BiSolidQuoteRight } from "react-icons/bi";

const Quote = () => {
    return (
        <div className='max-w-full px-4 pt-10 bg-(--gray) lg:p-6'>
            <div className='flex flex-col text-center gap-6 py-6 md:px-8'>
                <div className='leading-8 flex flex-col gap-4'>
                    <BiSolidQuoteRight className='text-5xl text-(--muted)' />
                    <p className='italic text-(--purple) text-xl font-semibold md:text-2xl lg:text-3xl'>
                        Indonesia doesn't just need people who understand languages. We need people who can use them — to communicate, collaborate, and connect with the world in meaningful ways.
                    </p>
                    <BiSolidQuoteRight className='rotate-180 text-5xl text-(--muted) ml-auto' />
                    <div className='text-xl text-(--purple) font-bold text-center md:text-2xl lg:text-3xl'>
                        <p>Ali Makthub</p>
                        <p>Founder, Speak All</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote