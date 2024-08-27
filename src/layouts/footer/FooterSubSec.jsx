import { MailOpen } from 'lucide-react'
import { motion } from 'framer-motion'
const FooterSubSec = () => {
    return (
        <>
            <div className='w-full h-auto mt-12 mb-5 flex flex-col justify-center items-center px-6 py-7 z-30'>
                <div className='w-24 h-24 rounded-full bg-primary_color flex flex-col justify-center items-center relative mt-4'>
                    <motion.div
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: 12, opacity: 0.1 }}
                        transition={{
                            duration: 1.5,
                            stiffness: 200,
                            repeat: Infinity, // Repeat the animation indefinitely
                            repeatType: 'loop', // Loop the animation
                        }}
                    >
                        <MailOpen size={35} />
                    </motion.div>
                </div>
                <p className='text-center text-white w-[70%] md:w-[30%] mt-10 mb-4'>
                    If you have any questions. Subscribe to our newsletter to
                    receive our latest products and latest news.
                </p>
                <form
                    method='post'
                    className='mt-4 flex justify-center items-center gap-6 flex-wrap'
                >
                    <input
                        required
                        type='text'
                        placeholder='Name'
                        className='w-[300px] px-5 py-4 bg-[#2F2F2F] text-white'
                    />
                    <input
                        required
                        type='email'
                        placeholder='Email'
                        className='w-[300px] px-5 py-4 bg-[#2F2F2F] text-white'
                    />
                    <button className='w-[300px] px-5 py-4 bg-tertiary_color text-white hover:bg-primary_color transition-all ease-in-out duration-300'>
                        Subscribe Now
                    </button>
                </form>
            </div>
            <img
                src='/assets/footer.jpg'
                alt='footer'
                className='absolute top-0 left-0 -z-20'
            />
            <img
                src='/assets/bg-footer.png'
                alt='bg-footer'
                className='absolute top-20 left-0 -z-20'
            />
        </>
    )
}

export default FooterSubSec
