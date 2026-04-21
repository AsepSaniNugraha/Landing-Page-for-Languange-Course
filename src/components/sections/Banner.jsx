import React from 'react'

const Banner = () => {
    return (
        <div className='max-w-full p-4 lg:p-6 bg-(--white)'>
            <div className='text-center flex flex-col gap-3'>
                <p className='section-subtitle text-(--gold)'>
                    BACKED BY EXPERIENCE WITH
                </p>
                <p className='section-text text-(--muted) tracking-widest'>Cambridge · Al-Azhar Network · Confucius Institute · Universitas Indonesia · British Council · KADIN Jakarta</p>
            </div>
        </div>
    )
}

export default Banner