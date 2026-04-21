import React from 'react'

const Approach = () => {
    return (
        <section id='approach'>
            <div className='max-w-full px-4 pt-10 bg-(--purple) lg:p-6'>
                <div className='flex flex-col gap-6 py-6'>
                    <div className='leading-8 text-center '>
                        <p className='section-subtitle text-(--gold)'>
                            OUR APPROACH
                        </p>
                        <p className='section-title text-(--cream)'>
                            Four Principles That Shape Everything
                        </p>
                        <p className='section-text text-(--muted) ps-1 pb-4'>
                            Speak All is not just another course. It is an institution built on strong educational values.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 gap-8 md:px-8 md:grid-cols-2'>
                        <div className='p-6 bg-(--purple-deep) border border-(--slate)'>
                            <p className='card-number text-(--gold)'>
                                01
                            </p>
                            <p className='card-title text-(--white) font-semibold'>
                                Bahasa-First, Always
                            </p>
                            <p className='card-text text-(--muted)'>
                                Every lesson begins with clarity — explained in the language you understand best.
                            </p>
                        </div>
                        <div className='p-6 bg-(--purple-deep) border border-(--slate)'>
                            <p className='card-number text-(--gold)'>
                                02
                            </p>
                            <p className='card-title text-(--white) font-semibold'>
                                Fluency, Not Memorization
                            </p>
                            <p className='card-text text-(--muted)'>
                                We build confident speakers who can communicate, not just pass exams.
                            </p>
                        </div>
                        <div className='p-6 bg-(--purple-deep) border border-(--slate)'>
                            <p className='card-number text-(--gold)'>
                                03
                            </p>
                            <p className='card-title text-(--white) font-semibold'>
                                Access for Everyone
                            </p>
                            <p className='card-text text-(--muted)'>
                                Every decision is made to make language learning more inclusive and reachable.
                            </p>
                        </div>
                        <div className='p-6 bg-(--purple-deep) border border-(--slate)'>
                            <p className='card-number text-(--gold)'>
                                04
                            </p>
                            <p className='card-title text-(--white) font-semibold'>
                                Culturally Grounded Learning
                            </p>
                            <p className='card-text text-(--muted)'>
                                Students learn language alongside cultural context and real-life application.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Approach