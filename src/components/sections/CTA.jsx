import React from 'react';
import ButtonFill from '../ui/ButtonFill';

const CTA = () => {
    return (
        <div className='max-w-full px-4 pt-10 bg-(--purple) lg:p-6'>
            <div className='flex flex-col gap-6 py-6 items-center'>
                <div className='leading-8 text-center '>
                    <p className='section-subtitle text-(--gold)'>
                        APPLICATIONS OPEN MAY 2026
                    </p>
                    <p className='section-title text-(--cream)'>
                        Begin Your <br />Language Journey Here
                    </p>
                    <p className='section-text text-(--muted) ps-1 pb-4'>
                        Join the first cohort at Speak All's Tembalang Campus. Limited seats. Bahasa Indonesia support. Real-world communication skills from day one.
                    </p>
                </div>
                <ButtonFill label="REGISTER NOW" />
            </div>
        </div>
    )
}

export default CTA