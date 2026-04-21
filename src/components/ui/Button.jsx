import React from 'react';

const Button = ({ label }) => {
    return (
        <div>
            <button className='linkButton-label text-(--cream)  border border-(--muted) py-2 px-8 hover:text-(--cream-deep) hover:border-(--cream-deep) tracking-wider min-w-full'>
                {label}
            </button>
        </div>
    )
}

export default Button