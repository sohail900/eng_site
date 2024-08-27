import { motion, AnimatePresence } from 'framer-motion' // Correct import
import { ChevronsRight } from 'lucide-react'
import PropTypes from 'prop-types'
const CardItem = ({ label, title, desc, id, url }) => {
    const iconVariants = {
        initial: { x: 0, opacity: 1 }, // Start left and invisible
        hover: { x: 30, opacity: 0 }, // Move right and become visible
        exit: { x: 0, opacity: 1 }, // Move far right and disappear
    }
    const iconVariants2 = {
        initial: { x: -30, opacity: 0 }, // Start left and invisible
        hover: { x: -20, opacity: 1 }, // Move right and become visible
        exit: { x: -30, opacity: 0 }, // Move far right and disappear
    }
    const textVariants = {
        initial: { x: 0 },
        hover: { x: -20 },
        exit: { x: 0 },
    }
    return (
        <>
            <div className='flex gap-4 mb-4'>
                <h2 className='w-12 h-12 text-white bg-primary_color grid place-items-center'>
                    {id}
                </h2>
                <h1 className='text-xl font-semibold'>
                    <span className='text-sm block font-normal text-color_light'>
                        {' '}
                        {label}{' '}
                    </span>
                    {title}
                </h1>
            </div>
            <p className='text-color_light mb-5'>{desc}</p>

            <motion.a
                href={url}
                style={{ fontFamily: 'Be Vietnam Pro' }}
                className='uppercase  font-semibold text-[0.8rem] flex items-center relative'
                whileHover='hover'
                initial='initial'
                exit='exit'
            >
                <AnimatePresence>
                    <motion.div
                        key='icon'
                        variants={iconVariants}
                        transition={{ duration: 0.4 }}
                        className='flex items-center '
                    >
                        <ChevronsRight className='mb-1 text-tertiary_color' />
                    </motion.div>
                    <motion.span
                        variants={textVariants}
                        transition={{ duration: 0.4 }}
                    >
                        Read More
                    </motion.span>
                    <motion.div
                        key='icon'
                        variants={iconVariants2}
                        transition={{ duration: 0.4 }}
                        className='flex items-center'
                    >
                        <ChevronsRight className='mb-1 text-tertiary_color' />
                    </motion.div>
                </AnimatePresence>
            </motion.a>
        </>
    )
}

CardItem.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    url: PropTypes.string.isRequired,
}
export default CardItem
