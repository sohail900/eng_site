import ReactSlider from 'react-slick'
import PropTypes from 'prop-types'
const Slider = ({
    dots = false,
    infinite = true,
    speed = 500,
    slidesToShow = 3,
    slidesToScroll = 1,
    initialSlide = 0,
    centerMode = true,
    centerPadding = '0px',
    breakpoints = [],
    children,
    className = '',
}) => {
    // Convert the `breakpoints` prop into the responsive format used by react-slick
    const responsive = Object.keys(breakpoints).map((breakpoint) => ({
        breakpoint: parseInt(breakpoint, 10), //convert string into number
        settings: breakpoints[breakpoint],
    }))

    // Combine all settings into the final settings object
    const settings = {
        dots,
        infinite,
        speed,
        slidesToShow,
        slidesToScroll,
        initialSlide,
        centerMode,
        centerPadding,
        responsive,
    }
    return (
        <>
            <ReactSlider {...settings} className={className}>
                {children}
            </ReactSlider>
        </>
    )
}

Slider.propTypes = {
    dots: PropTypes.bool,
    infinite: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    initialSlide: PropTypes.number,
    centerMode: PropTypes.bool,
    centerPadding: PropTypes.string,
    breakpoints: PropTypes.array,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default Slider
