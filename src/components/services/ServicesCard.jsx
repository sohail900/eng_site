import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const ServicesCard = ({ image, title, index }) => {
    return (
        <>
            <div
                className='w-[250px] h-[300px] shadow-customShadow mb-10 relative'
                key={index}
            >
                <div className='w-full h-full relative rounded-lg overflow-hidden'>
                    <img
                        src={image}
                        alt={image}
                        className='absolute w-full h-full object-cover top-0 left-0'
                    />
                </div>
                <h1 className='w-full absolute bottom-0 px-5 py-4 text-lg bg-[rgba(0,0,0,0.5)] h-[30%] text-white text-center font-semibold'>
                    {title}
                </h1>
                <Link
                    to={`../services/details/${title}`}
                    className='absolute right-1/2 translate-x-1/2 -bottom-4 px-3 py-1 bg-primary_color text-white rounded-full '
                >
                    Read More
                </Link>
            </div>
        </>
    )
}

ServicesCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    index: PropTypes.number,
}

export default ServicesCard
