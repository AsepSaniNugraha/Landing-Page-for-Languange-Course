import React, { useState } from 'react';
import logoAcademy from '../../assets/logoAcademy.png';
import Button from '../ui/Button';
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const dataLinks = [
        {
            label: "ABOUT",
            link: "#about"
        },
        {
            label: "PROGRAMS",
            link: "#programs"
        },
        {
            label: "APPROACH",
            link: "#approach"
        },
        {
            label: "CAMPUS",
            link: "#location"
        },
    ]

    const [floatingNavbar, setFloatingNavbar] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 150) {
            setFloatingNavbar(true)
            setOpenNavbar(false)
        } else {
            setFloatingNavbar(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return (
        <div
            className={`w-full p-4 md:p-6 lg:p-8 left-0 z-50 transition-all duration-500 ease-in-out ${floatingNavbar ? "fixed top-0 translate-y-0 bg-(--purple) shadow-2xl py-2 md:py-2 lg:py-2" : "relative -top-full"}`}>
            <div className='relative flex items-center justify-between'>
                <a href="#home" className='flex gap-2 items-center'>
                    <img src={logoAcademy} alt="" loading='lazy' className="w-[clamp(80px,10vw,80px)]" />
                    <p className='section-title text-(--white) '>Speak All</p>
                </a>
                <div
                    className={`absolute top-full right-0 flex flex-col gap-2 bg-(--purple-deep) overflow-hidden transition-all duration-300 ease md:right-0 lg:flex-row lg:relative lg:items-center lg:bg-transparent lg:shadow-none lg:min-h-max ${openNavbar ? "max-h-96 shadow-2xl border border-(--slate)" : "max-h-0 border-transparent"}`}>
                    {dataLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.link} className='linkButton-label text-(--cream) text-center py-2 px-5 hover:text-(--cream-deep)'>{link.label}</a>
                    ))}
                    <div className='p-4 lg:block'>
                        <Button label="ENROLL NOW" />
                    </div>
                </div>
                <button
                    onClick={() => setOpenNavbar((prev) => !prev)}
                    className='text-2xl text-(--cream) hover:scale-110 lg:hidden'>
                    {openNavbar ? <RiCloseLargeFill /> : <GiHamburgerMenu />}
                </button>
            </div>
        </div>
    )
}

export default Navbar