import React from 'react';
import herobg from '../../assets/herobg.png';
import Button from '../ui/Button';
import ButtonFill from '../ui/ButtonFill';

const Hero = () => {
    return (
        <section id='home'>
            <div className='max-w-full p-4 md:p-6 lg:px-8'>
                <div className='flex md:items-center'>
                    <div className='flex flex-col gap-15 leading-8 lg:gap-30 '>
                        <div className='flex flex-col gap-5'>
                            <h1 className='hero-title text-(--cream)'>
                                Master Languages<br />
                                <span className='text-(--gold)'>for Every Goal</span>
                            </h1>
                            <p className='hero-text text-(--muted)'>
                                Speak All is a language institute built for Indonesia — rigorous, accessible, and grounded in the belief that mastering global languages opens doors for everyone.
                            </p>
                        </div>
                        <div className='flex flex-col gap-5 w-full md:flex-row'>
                            <ButtonFill label="REGISTER NOW" />
                            <Button label="VIEW PROGRAMS" />
                        </div>
                    </div>
                    <img src={herobg} alt="" loading='lazy' className='hidden h-fit md:block md:w-1/3 lg:w-full' />
                </div>
            </div>
        </section>
    )
}

export default Hero