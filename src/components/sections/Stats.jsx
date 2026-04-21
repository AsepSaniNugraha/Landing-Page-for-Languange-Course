import React from 'react'

const Stats = () => {
    const dataStats = [
        {
            statNumber: "135+",
            desc: "HOURS OF INSTRUCTION"
        },
        {
            statNumber: "15",
            desc: "MAX COHORT SIZE"
        },
        {
            statNumber: "12+",
            desc: "PRACTICAL PROJECTS"
        },
        {
            statNumber: "100%",
            desc: "BAHASA SUPPORT"
        },
    ]
    return (
        <div className='max-w-full p-4 lg:p-6 bg-(--gray)'>
            <div className='grid grid-cols-2 content-center gap-x-4 gap-y-6 lg:grid-cols-4'>
                {dataStats.map((dataStat) => (
                    <div key={dataStat.statNumber} className='flex flex-col text-center shadow-2xl'>
                        <p className='hero-title text-(--purple-deep) text-5xl'>{dataStat.statNumber}</p>
                        <p className='section-text text-(--muted)'>{dataStat.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stats