import { NavLink } from 'react-router-dom'
import logo from '/assets/logo_yellow.png'
import { PhoneCall, X } from 'lucide-react'
import PropTypes from 'prop-types'
const NavItem = ({ fixed, setShowNav }) => {
    return (
        <>
            <ul className='flex gap-5 mr-8 font-medium'>
                <li>
                    <img
                        src={logo}
                        alt='logo'
                        width={190}
                        className='block xl:hidden'
                    />
                </li>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About Us</NavLink>
                </li>
                <li>
                    <NavLink to='/services'>Services</NavLink>
                </li>
                <li>
                    <NavLink to='/products'>Products</NavLink>
                </li>
                <li>
                    <NavLink to='/portfolios'>Portfolios</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact Us</NavLink>
                </li>
            </ul>
            <div
                className={`flex gap-2 items-center ${
                    fixed
                        ? 'bg-transparent text-black'
                        : 'bg-tertiary_color text-white'
                } px-6 py-4 hidden xl:flex`}
            >
                <PhoneCall
                    size={28}
                    className={`${fixed ? 'text-primary_color' : 'text-white'}`}
                />
                <div>
                    <p className='text-[0.9rem]'>Call Us for Help!</p>
                    <h2>+(888) 452 1505</h2>
                </div>
            </div>
            <X
                size={30}
                className='mr-5 cursor-pointer xl:hidden absolute top-7 right-1'
                onClick={() => setShowNav(false)}
            />
        </>
    )
}
NavItem.propTypes = {
    fixed: PropTypes.bool,
    setShowNav: PropTypes.func,
}
export default NavItem
