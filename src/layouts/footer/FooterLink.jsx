import {
    ChevronRight,
    MapPinned,
    Phone,
    Facebook,
    Youtube,
    Linkedin,
    Instagram,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const FooterLink = () => {
    return (
        <>
            <footer className='w-full mx-auto mt-8 grid grid-cols-1 place-items-center gap-6 px-10 py-7 z-40 lg:grid-cols-4 md:grid-col-2'>
                <div className='text-white w-full ml-8'>
                    <img src='/assets/logo_blue.png' alt='logo' width={200} />
                    <p className='w-full md:w-[80%] mb-4 mt-4'>
                        Industo is a creator of zero emission energy solutions.
                        Our versatile services help bring success to companies
                        in the industry.
                    </p>
                    <button className='px-4 py-2 text-white rounded-md bg-primary_color uppercase text-sm transition-all ease-in-out duration-300 hover:bg-tertiary_color '>
                        About Us
                    </button>
                </div>
                <div className='text-white w-full'>
                    <h1 className='link_title'>Quick Link</h1>
                    <ul className='flex flex-col gap-3'>
                        <li className='link-link-style'>
                            <ChevronRight size={17} />
                            <Link to='#'>Services</Link>
                        </li>
                        <li className='link-link-style'>
                            <ChevronRight size={17} />
                            <Link to='#'>Blog</Link>
                        </li>
                        <li className='link-link-style'>
                            <ChevronRight size={17} />
                            <Link to='#'>Portfolio</Link>
                        </li>
                    </ul>
                </div>
                <div className='text-white w-full'>
                    <h1 className='link_title'>Official info:</h1>
                    <ul className='flex flex-col gap-3'>
                        <li className='link-link-style'>
                            <MapPinned size={17} />
                            <Link to='#' className='text-sm'>
                                30 Commercial Road Fratton, Australia
                            </Link>
                        </li>
                        <li className='link-link-style'>
                            <Phone size={17} />
                            <Link to='#' className='text-sm'>
                                1-888-452-1505
                            </Link>
                        </li>
                        <li className='mt-4 text-white'>
                            <p className='font-semibold mb-2'>Open Hours:</p>
                            <p className='text-sm'> Mon – Sat: 8 am – 5 pm,</p>
                            <p className='text-sm'>Sunday: CLOSED</p>
                        </li>
                    </ul>
                </div>
                <div className='text-white w-full'>
                    <h1 className='link_title'>Gallery</h1>
                    <div className='flex flex-wrap gap-2'>
                        <img src='/assets/clients/client1.jpg' alt='client1' />
                        <img src='/assets/clients/client2.jpg' alt='client2' />
                        <img src='/assets/clients/client3.jpg' alt='client3' />
                        <img src='/assets/clients/client4.jpg' alt='client4' />
                    </div>
                    <ul className='flex items-center mt-4 gap-6'>
                        <Link
                            to='http://facebook.com'
                            className='link-link-style'
                        >
                            <Facebook size={25} strokeWidth={1.2} />
                        </Link>
                        <Link
                            to='http://youtube.com'
                            className='link-link-style'
                        >
                            <Youtube size={26} strokeWidth={1.2} />
                        </Link>
                        <Link
                            to='http://linkedlin.com'
                            className='link-link-style'
                        >
                            <Linkedin size={25} strokeWidth={1.2} />
                        </Link>
                        <Link
                            to='http://instagram.com'
                            className='link-link-style'
                        >
                            <Instagram size={24} strokeWidth={1.2} />
                        </Link>
                    </ul>
                </div>
            </footer>
            <img
                src='/assets/bg-footer.png'
                alt='bg-footer'
                className='absolute -bottom-10 left-0 -z-20'
            />
            <div className='px-10 py-3'>
                <hr className='border-none w-full h-[0.01rem] bg-[rgba(255,255,255,0.2)]' />
                <p className='mt-3 text-white text-center'>
                    &#169; 2024 Industo –{' '}
                    <a href='#' className='text-primary_color'>
                        CaseThemes
                    </a>{' '}
                    – All rights reserved.
                </p>
            </div>
        </>
    )
}

export default FooterLink
