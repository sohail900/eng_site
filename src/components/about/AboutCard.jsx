import CountUp from 'react-countup'
import PropTypes from 'prop-types'
const AboutCard = ({ Icon, title, ends }) => {
    return (
        <>
            <div className='w-[350px] h-auto flex shadow-customShadow relative'>
                <div className=' w-28 h-28 bg-primary_color rounded-tr-2xl rounded-br-full  px-5 py-5'>
                    <Icon className='w-12 h-12 text-white' />
                </div>
                <div className='mt-3 ml-3'>
                    <h1 className='text-3xl '>
                        <CountUp end={ends} duration={3} />+
                    </h1>
                    <h1 className='text-xl  mt-1 text-color_light'>{title}</h1>{' '}
                </div>
            </div>
        </>
    )
}

AboutCard.propTypes = {
    Icon: PropTypes.elementType.isRequired,
    title: PropTypes.string.isRequired,
    ends: PropTypes.number.isRequired,
}

export default AboutCard
