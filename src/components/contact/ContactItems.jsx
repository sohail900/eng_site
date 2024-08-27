import { motion, useAnimation } from 'framer-motion'
import { Home, PhoneCall, Mail } from 'lucide-react'
const ContactItems = () => {
    const homeControls = useAnimation()
    const mailControls = useAnimation()
    return (
        <>
            <motion.div
                className='w-[340px] bg-[#EEEEEE] px-10 py-8 flex  gap-4'
                onHoverStart={() =>
                    homeControls
                        .start({ scale: 0.1 })
                        .then(() => homeControls.start({ scale: 1 }))
                }
            >
                <motion.div
                    className='text-tertiary_color'
                    initial={{ scale: 1 }}
                    animate={homeControls}
                    transition={{
                        type: 'spring',
                        stiffness: 600,
                        damping: 50,
                    }}
                >
                    <Home size={50} strokeWidth={1.2} />
                </motion.div>
                <div>
                    <p>30 Commercial Road</p>
                    <p>Fratton, Australia</p>
                </div>
            </motion.div>
            <div className='container w-[340px] bg-[#EEEEEE] px-10 py-8 flex  gap-4'>
                <div className='text-tertiary_color an_icon'>
                    <PhoneCall size={50} strokeWidth={1.2} />
                </div>
                <div>
                    <a
                        href='tel:1-888-452-1505'
                        className='text-black transition-all hover:text-tertiary_color block'
                    >
                        1-888-452-1505
                    </a>
                    <a
                        href='tel:1-888-452-1505'
                        className='text-black transition-all hover:text-tertiary_color'
                    >
                        1-888-452-1505
                    </a>
                </div>
            </div>
            <motion.div
                className='w-[340px] bg-[#EEEEEE] px-10 py-8 flex  gap-4'
                onHoverStart={() =>
                    mailControls
                        .start({ x: 30, opacity: 0 })
                        .then(() => mailControls.start({ x: -30, opacity: 0 }))
                        .then(() => mailControls.start({ x: 1, opacity: 1 }))
                }
            >
                <motion.div
                    className='text-tertiary_color'
                    initial={{ scale: 1 }}
                    animate={mailControls}
                    transition={{
                        type: 'spring',
                        stiffness: 600,
                        damping: 50,
                    }}
                >
                    <Mail size={50} strokeWidth={1.2} />
                </motion.div>
                <div>
                    <a
                        href='mailto:industo@gmail.com'
                        className='text-black transition-all hover:text-tertiary_color block'
                    >
                        industo@gmail.com
                    </a>
                    <a
                        href='mailto:industo@gmail.com'
                        className='text-black transition-all hover:text-tertiary_color'
                    >
                        industo@support.com
                    </a>
                </div>
            </motion.div>
        </>
    )
}

export default ContactItems
