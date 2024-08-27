import { useState, useEffect } from 'react'
import { AlignJustify } from 'lucide-react'
import logo from '/assets/logo_yellow.png'
import NavItem from './NavItem'
import './style.css'
const Navbar = () => {
    const [fixed, setFixed] = useState(false)
    const [showNav, setShowNav] = useState(false)
    //useEffect to handle the scroll event.
    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 150) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        }
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    return (
        <>
            <nav
                className={`w-full flex justify-between items-center bg-white transition-all duration-300 ease-in-out ${
                    fixed ? 'fixed top-0 left-0 z-50' : 'relative'
                }`}
            >
                <div className='pl-3'>
                    <img
                        src={logo}
                        alt='logo'
                        width={190}
                        className={`block ml-4 py-5 xl:ml-0 xl:py-0 ${
                            fixed ? 'xl:block' : 'xl:hidden'
                        }`}
                    />
                    {!fixed && (
                        <p className='text-[1rem] opacity-75 hidden xl:block'>
                            Welcome to our{' '}
                            <span className='text-tertiary_color'>Industo</span>{' '}
                            Company!
                        </p>
                    )}
                </div>
                <div
                    className={`navItem  ${
                        showNav ? 'right-0' : 'right-[100%]'
                    } xl:right-0`}
                >
                    <NavItem fixed={fixed} setShowNav={setShowNav} />
                </div>
                {!showNav && (
                    <AlignJustify
                        size={30}
                        className='mr-6 cursor-pointer xl:hidden'
                        onClick={() => setShowNav(true)}
                    />
                )}
            </nav>
        </>
    )
}

export default Navbar
