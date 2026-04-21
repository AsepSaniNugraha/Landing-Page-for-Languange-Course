import React from 'react';

const ButtonVar = ({ label }) => {
    return (
        <div>
            <button className='linkButton-label text-(--purple-deep) border border-(--purple) py-2 px-8 hover:text-(--gold) hover:border-(--gold) tracking-wider min-w-full'>
                {label}
            </button>
        </div>
    )
}

export default ButtonVar