import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { SquareArrowOutUpRight } from 'lucide-react'
const PortfolioCards = ({ image, title, id }) => {
    const controls = useAnimation()
    return (
        <>
            <motion.div
                className={`w-[280px] lg:w-[350px] rounded-lg overflow-hidden relative grid place-items-center`}
                onHoverStart={() => controls.start({ x: 0, opacity: 1 })}
                onHoverEnd={() => controls.start({ x: -2000, opacity: 0.6 })}
            >
                <img
                    src={image}
                    alt={image}
                    className='w-full aspect-square object-cover '
                />
                <motion.div
                    className='w-[80%] px-4 py-8 bg-primary_color text-white rounded-lg absolute bottom-10'
                    animate={controls}
                    transition={{ type: 'just' }}
                >
                    <h1 className='text-xl font-semibold'>{title}</h1>
                    <Link
                        to={`../portfolios/${id}`}
                        className='absolute -top-2 -right-2'
                    >
                        <SquareArrowOutUpRight size={30} />
                    </Link>
                </motion.div>
            </motion.div>
        </>
    )
}
PortfolioCards.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
export default PortfolioCards
