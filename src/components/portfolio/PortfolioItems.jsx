import { Link } from 'react-router-dom'
import { MoveRight } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import PropTypes from 'prop-types'
const variants = {
    initial: {
        scale: 1,
        backdropFilter: 'blur(8px)',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    hover: {
        scale: 0.9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'none',
    },
    transition: {
        duration: 0.01,
        ease: 'easeInOut',
    },
}
const PortfolioItems = ({ id, key, desc, image, title }) => {
    const controls = useAnimation()
    return (
        <>
            <div className='w-full' key={key}>
                <div className='w-full relative' key={key}>
                    <img
                        src={image}
                        alt={image}
                        className='w-full object-center'
                    />
                    <div className='w-full h-full z-50 '>
                        <motion.div
                            className='image_card'
                            variants={variants}
                            initial={'initial'}
                            whileHover={'hover'}
                            whileTap={'hover'}
                            onHoverStart={() =>
                                controls.start({ opacity: 1, y: 0 })
                            }
                            onHoverEnd={() =>
                                controls.start({ opacity: 0, y: 20 })
                            }
                            onTapStart={() =>
                                controls.start({ opacity: 1, y: 0 })
                            }
                            onTapCancel={() =>
                                controls.start({ opacity: 0, y: 20 })
                            }
                        >
                            <div className=' absolute top-64 sm:top-80'>
                                <h1 className='text-2xl mb-4 transition-colors'>
                                    0{id}
                                </h1>
                                <h2 className='text-2xl mb-4 font-bold'>
                                    {title}
                                </h2>
                                <motion.p
                                    className='hidden mb-4'
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={controls} // Sync with parent's hover
                                    transition={{
                                        duration: 0.5,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    {desc}
                                </motion.p>
                                <Link
                                    to='#'
                                    className='icon w-10 h-8 grid place-items-center bg-white text-black'
                                >
                                    <MoveRight />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

PortfolioItems.propTypes = {
    id: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default PortfolioItems
