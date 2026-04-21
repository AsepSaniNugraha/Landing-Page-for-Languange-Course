import React from 'react';

const ButtonFill = ({ label }) => {
    return (
        <div>
            <button className='linkButton-label text-(--purple)  bg-(--gold) py-2 px-8 hover:text-(--cream-deep) hover:border-(--cream-deep) tracking-wider min-w-full'>
                {label}
            </button>
        </div>
    )
}

export default ButtonFill