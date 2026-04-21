import React, { useState } from 'react';
import ButtonFill from '../ui/ButtonFill';

const NotifBanner = () => {
    const [modal, setModal] = useState(false)

    const handleModal = () => {
        if (window.scrollY > 150) {
            setModal(true)
        } else {
            setModal(false)
        }
    }

    window.addEventListener("scroll", handleModal)
    return (
        <div className='w-full h-full flex items-center justify-center bg-transparent'>
            <div className={`card-text flex gap-2 items-center py-2 px-2 border border-(--slate) bg-(--purple) rounded-lg text-(--white) transition-all duration-500 ease ${modal ? "fixed top-7/8 translate-y-0 bg-(--purple) shadow-2xl py-2" : "fixed top-full"}`}>
                <p>Special offer </p>
                {/* <p className='text-(--gold)'>May 2026</p> */}
                <ButtonFill label="REGISTER NOW" />
            </div>
        </div>
    )
}

export default NotifBanner